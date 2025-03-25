<?php

function dirsize($dir) {
   $dh = opendir($dir);
   $size = 0;
   while (($file = readdir($dh)) !== false)
       if ($file != "." and $file != "..") {
           $path = $dir."/".$file;
           if (is_dir($path)) {
               $size += dirsize($path);
               echo $path . '<br>';
           } else if (is_file($path)) {
               $size += filesize($path);
               //echo 'deleting: ' . $path . '<br>';
               //echo 'deleting: ' . $path . ' ' . unlink($path) . '<br>';
           }
       }
   closedir($dh);
   $mgs_size = round($size/1048576, 2) . ' MB';
   echo $mgs_size . '<br>';
   return $size;
}

echo dirsize ('uploaded/thumbs');

?>