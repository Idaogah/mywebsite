<?php
class MyClass {
    public function get_all_categories() {
        $categories = get_categories(array('hide_empty' => false));
        return $categories;
    }
}

<p></p>

$myObject = new MyClass();
$categories = $myObject->get_all_categories();

echo '<ul>';
foreach ($categories as $category) {
    echo '<li><a href="' . get_category_link($category->term_id) . '">' . $category->name . '</a></li>';
}
echo '</ul>';
?>
