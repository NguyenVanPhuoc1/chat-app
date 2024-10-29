<?php 
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

if(!function_exists('upload_file')){
    function upload_file($file, $directory){
        $extension = $file->getClientOriginalExtension();
        $fileName = Str::uuid() . '.' .$extension;

        Storage::disk('public')->putFileAs($directory,$file,$fileName);

        return "/storage/$directory/$fileName";
    }
}

if(!function_exists('remove_file')){
    function remove_file($filePath){
        if($filePath && Storage::disk('public')->exists($filePath)){
            return Storage::disk('public')->delete($filePath);
        }

        return false;
    }
}