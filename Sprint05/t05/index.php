<?php

class StrFrequency {
    function __construct(string $str) {
        $this->str = $str;
    }

    function letterFrequencies() {
        $res = array();
        $str = strtoupper($this->str);
        $alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        for ($i = 0; $i < strlen($alphabet); $i++) {
            $count = mb_substr_count($str, $alphabet[$i]);
            if ($count)
                $res[$alphabet[$i]] = $count;
        }
        return $res;
    }

    function wordFrequencies() {
        if ($this->str == "") 
            return [];
        $res = array();
        $str = strtoupper($this->str);
        $arr = explode(" ", $str);

        foreach ($arr as $i) {
            if (ctype_alpha($i)) {
                $res[$i] = 0;
                foreach ($arr as $v2) {
                    if ($i == $v2)
                        $res[$i]++;
                }
            }
        }
        return $res;
    }

    function reverseString() {
        $res = preg_replace('/[0-9.,!-]/', ' ', strrev($this->str));
        return str_replace("'", " ", $res);
    }
}

function test($string) {
    $obj = new StrFrequency($string);
    $symbol = $obj->letterFrequencies();

    echo "Letters in " . $string . "\n";

    foreach ($symbol as $k => $v) {
        echo "Letter " . $k . " is repeated " . $v . " times\n";
    }
    
    $symbol = $obj->wordFrequencies();
    echo "Words in " . $string . "\n";
    foreach ($symbol as $k => $v) {
        echo "Word " . $k . " is repeated " . $v . " times\n";
    }
    
    echo "Reverse the string: " . $string . "\n";
    echo $obj->reverseString() . "\n";
}

    // test("Face it, Harley-- you and your Puddin' are kaput!");
    // echo"*************\n";

    // test("  Test test 123 45 !0 f   HeLlO wOrLd  ");
    // echo"*************\n";

    // test("");
?>