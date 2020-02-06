$p= 8; $n= 48;
for($c= $n, $x= $n-1, $y= 2; $y<=$p; $y++, $x--) $c= $c*$x/$y;
echo "$c\n";