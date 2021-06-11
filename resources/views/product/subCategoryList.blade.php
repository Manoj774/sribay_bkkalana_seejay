
@foreach($subcategories as $subcategory)
    <ul>
        <li>{{$subcategory->category_name}}</li>
        @if(count($subcategory->children))
            @include('product.subCategoryList',['subcategories' => $subcategory->children])
        @endif
    </ul>
@endforeach
