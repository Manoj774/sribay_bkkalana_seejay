<?php


namespace App\Export;


use App\Models\Order;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;

class OrderExport implements FromQuery
{
    use Exportable;
    protected $dateFrom;
    protected $dateTo;
    protected $status;

    public function __construct($dateFrom,$dateTo,$status)
    {
        $this->dateFrom = $dateFrom;
        $this->dateTo = $dateTo;
        $this->status = $status;
    }

    public function query()
    {
        $ordersData = array();
        $sql  = 'SELECT `orders`.`id`, `orders`.`created_at`, `orders`.`net_amount`, `orders`.`order_stat`, ';
        $sql .= ' `orders`.`shipping_cost`, `orders`.`shipping_cost`, `orders`.`tax`, `orders`.`sub_total`, ';
        $sql .= ' CONCAT(users.first_name," ",users.last_name) AS full_name, `payments`.`payment_stat`, ';
        $sql .= '`payments`.`transaction_id`, `customer_shipping_addresses`.`first_name` ';
        $sql .= ' AS `shipping_first_name`, `customer_shipping_addresses`.`last_name`';
        $sql .= ' AS `shipping_last_name`, `customer_shipping_addresses`.`address` ';
        $sql .= ' AS `shipping_address`, `customer_shipping_addresses`.`city` ';
        $sql .= ' AS `shipping_city`, `customer_shipping_addresses`.`state` ';
        $sql .= ' AS `shipping_state`, `customer_shipping_addresses`.`zip_code` ';
        $sql .= ' AS `sipping_zip_code`, `customer_shipping_addresses`.`phone_number` ';
        $sql .= ' AS `shipping_phone_number` FROM `orders` ';
        $sql .= ' INNER JOIN `users` ON `orders`.`user_id` = `users`.`id` ';
        $sql .= ' INNER JOIN `customer_shipping_addresses` ON `users`.`id` = `customer_shipping_addresses`.`user_id` ';
        $sql .= ' INNER JOIN `payments` ON `orders`.`id` = `payments`.`order` ';
        $sql .= ' WHERE `orders`.`order_stat`="'.$this->status.'"';
        if ($this->dateTo != null && $this->dateTo != ''){
            $sql .= ' AND orders.created_at between "'.$this->dateFrom.'" and "'.$this->dateTo.'"';
        }

        $orders = DB::select($sql);

        if ($orders) {

            foreach ($orders as $order) {
                $order_items = DB::table('order_items')
                    ->select('order_items.id', 'order_items.quantity', 'order_items.total', 'products.product_name',
                        'product_images.image_url')
                    ->join('products', 'order_items.product_id', '=', 'products.id')
                    ->join('product_images', 'products.id', '=', 'product_images.product_id')
                    ->where('order_id', '=', $order->id)
                    ->groupBy('order_items.id')
                    ->get();
                $order->orderId = sprintf('%06d',$order->id);
                $order->order_items = $order_items;
                $ordersData[] = $order;
            }

            return $ordersData;
        }
        return Order::all();
    }
}
