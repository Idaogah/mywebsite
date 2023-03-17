<?php
require_once('path/to/openai/autoload.php');

use OpenAI\Api\Authentication\Authentication;
use OpenAI\Language\Models;

class MyClass {
    public function get_all_categories() {
        $categories = get_categories(array('hide_empty' => false));
        return $categories;
    }
}

$myObject = new MyClass();
$categories = $myObject->get_all_categories();

echo '<ul>';
foreach ($categories as $category) {
    echo '<li><a href="' . get_category_link($category->term_id) . '">' . $category->name . '</a></li>';
}
echo '</ul>';

openai\Api::setAuthentication(new Authentication('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'));
$response = Models\Completion::create(
    'text-davinci-002',
    'Hello, World!',
    1,
    0,
    null,
    null,
    null,
    null
);
echo $response->choices[0]->text;
?>
