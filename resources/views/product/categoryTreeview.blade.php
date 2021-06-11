
@foreach($parentCategories as $category)

    {{$category->category_name}}

    @if(count($category->children))
        @include('product.subCategoryList',['subcategories' => $category->children])
    @endif

@endforeach
