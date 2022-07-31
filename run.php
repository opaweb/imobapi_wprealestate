<?php
define('WP_USE_THEMES', false);
(string)$caminho = dirname(__FILE__);
require_once( $caminho.'/../../../wp-blog-header.php' );

if($_REQUEST['post_id']){
    $postid = $_REQUEST['post_id'];
}else{
    $postid = null;
}
$post = get_post($postid);

if ( class_exists( 'EXMAGE_WP_IMAGE_LINKS' ) ) {      
   
    $images = get_post_meta($post->ID, '_images', false);
    $gallery = [];
    var_dump($images[0]);
    if(empty($images[0])){
        $img_url = "https://via.placeholder.com/800x600.webp/FFFFFF/000000?text=Em%20breve%20atualizaremos%20as%20imagens%20deste%20im%C3%B3vel";
        
        $featuredImage = $img_url;

        $post_parent    = $post->ID;//ID of the post that you want this image to be attached to
        $external_image = EXMAGE_WP_IMAGE_LINKS::add_image( $img_url, $image_id, $post_parent );
        $gallery[$external_image['id']] = $external_image['url'];
    }
    else {
        $featuredImage = $images[0][0]['link'];

        foreach($images[0] as $image){
            
            $url            = $image['link'];//image url
            $post_parent    = $post->ID;//ID of the post that you want this image to be attached to
            $external_image = EXMAGE_WP_IMAGE_LINKS::add_image( $url, $image_id, $post_parent );
            $gallery[$external_image['id']] = $external_image['url'];
        }
    }

    fifu_dev_set_image($post->ID, $featuredImage);

    update_post_meta($post->ID, '_property_gallery', $gallery);

    $floorPlans = get_post_meta($post->ID, '_floor_plans', false);
    
    $fpgroup = [];

    foreach($floorPlans[0] as $fp){
        $plans = [];
        $url            = $fp['link'];//image url
        $post_parent    = $post->ID;//ID of the post that you want this image to be attached to
        $external_image = EXMAGE_WP_IMAGE_LINKS::add_image( $url, $image_id, $post_parent );
        $plans['name'] = $fp['titulo'];
        $plans['image_id'] = $external_image['id'];
        $plans['image'] = $external_image['url'];
        array_push($fpgroup, $plans);
    }

    update_post_meta($post->ID, '_property_floor_plans_group', $fpgroup);
}
?>