<?php
class File {
    private $dir = "tmp";
    private $path;
    private $descriptor;
    public function __construct($path) {
        if (!file_exists($this->dir)) {
            mkdir($this->dir);
        }
        $this->path = $path;
        $this->descriptor = fopen ($this->path, "c");
    }
    public function write($str) {
        if (file_exists($this->path)) {
            file_put_contents ($this->path, $str , FILE_APPEND);
        }
    }
    public function toList() {
        $get_content = file_get_contents($this->path);
        $content = str_replace("\n", "<br>", $get_content);
        return $content;
    }
    public function __destruct() {
        fclose($this->descriptor);
    }
}
