<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\ProductHasCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{


    /**
     * Display a listing of the categories.
     *
     * @return Response json
     */
    public function index()
    {
        $categories = array();

        $cats = Category::select('id','name','parent_id')->where('stat',true)->orderBy('parent_id')->get();
        $count = 1;
        foreach($cats as $cat){
            $categories[] = array(
                'id' => $cat->id,
                "count" => $count,
                "category_name" => $cat->name,
                "parent_category" => $cat->parent_id != null | $cat->parent_id != 0 ? $this->getParentCategoryName($cat->parent_id) : "No Parent",
                "product_count" => $this->getProductCountByCategory($cat->id)
            );
            $count++;
        }

        return response()->json(['categories' => $categories], 200);

    }


    private function getParentCategoryName($id){
        $parentCategory = Category::select('name')->where('id',$id)->first();
        return $parentCategory->name;
    }

    private function getProductCountByCategory($id){
        $productsCount = ProductHasCategory::where('category_id',$id)->groupBy('product_id')->count();
        return $productsCount;
    }

    /**
     * Display a listing of the categories for treeView.
     *
     * @return Response json
     */

    public function getCategoryForTreeView()
    {
        return response()->json(['categories' => $this->getTreeViewCategories()], 200);

    }

    private function getTreeViewCategories(){
        $categories = Category::select('id','name')->where('parent_id',0)->get();
        $i=0;
        foreach($categories as $p_cat){
            $categories[$i]->children = $this->getTreeViewSubCategories($p_cat->id);
            $i++;
        }
        return $categories;
    }

    private function getTreeViewSubCategories($id){

        $categories = Category::select('id','name')->where('parent_id',$id)->where('stat',true)->get();
        $i=0;
        foreach($categories as $p_cat){
            $categories[$i]->children = $this->getTreeViewSubCategories($p_cat->id);
            $i++;
        }
        return $categories;
    }


     /**
     * Display a listing of the categories for treeSelect.
     *
     * @return Response
     */

    public function getCategoriesForTreeSelect(){
        return response()->json(['categories' => $this->getVueTreeSelectCategories()], 200);
    }


    private function getVueTreeSelectCategories(){
        $categories = Category::select('id','name AS label')->where('parent_id',0)->get();
        $i=0;
        foreach($categories as $p_cat){
            $categories[$i]->children = $this->getVueTreeSelectSubCategories($p_cat->id);
            $i++;
        }
        return $categories;
    }

    private function getVueTreeSelectSubCategories($id){
        $categories = Category::select('id','name AS label')->where('parent_id',$id)->where('stat',true)->get();
        $i=0;
        foreach($categories as $p_cat){
            $categories[$i]->children = $this->getVueTreeSelectSubCategories($p_cat->id);
            $i++;
        }
        return $categories;
    }


    /**
     * Display a listing of the sub categories.
     *
     * @return Response
     */

    public function onlySubCategoriesByParent($id){
        $categories = DB::table('categories')
            ->select('id', 'name')
            ->where('parent_id', $id)->get();
       return response()->json(['sub_categories' => $categories], 200);
    }


    /**
     * Store a newly created category in storage.
     *
     * @param Request $request
     * @return Response json
     */
    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required|max:250'
        ]);

        $category = new Category([
            'name' => $request->name,
            'parent_id' => $request->parent_category == null ? 0: $request->parent_category,
        ]);

        if (!$category->save()){
            return response()->json(['message' => 'Category not created. Internal Server Error'],500 );
        }
        return response()->json(['message' => 'Category has been created'],201 );
    }


    /**
     * Edit the specified category.
     *
     * @param int $id
     * @return Response json
     */
    public function edit($id)
    {
        $category = DB::table('categories')
        ->where('id', $id)->first();

        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        return response()->json(['category' => $category], 200);
    }

    /**
     * Update the specified category in storage.
     *
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|unique:categories|max:250'
        ]);

        $category = Category::find($id);
        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }
        $category->name = $request->name;
        $category->parent_id = $request->parent_category == null ? 0: $request->parent_category;
        if (!$category->update()){
            return response()->json(['message' => 'Category not update. Internal Server Error'], 500);
        }

        return response()->json(['message' => 'Category has been updated'], 200);

    }

    /**
     * destroy the specified category in storage.
     *
     *
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function destroy(Request $request, $id)
    {
        $request->validate([
            'stat' => 'required'
        ]);
        $category = Category::find($id);
        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }
        $category->stat = $request->stat;
        if (!$category->update()){
            return response()->json(['message' => 'Category not disabled. Internal Server Error'], 500);
        }

        return response()->json(['message' => 'Category has been disabled'], 200);

    }


}
