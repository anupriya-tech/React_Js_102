<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
<script type="text/javascript">
    function sortRecord() {
    var collection = [
    { id: 101, name: 'raj' },
    { id: 121, name: 'rajesh' },
    { id: 130, name: 'suraj' },
    { id: 114, name: 'tom' }];
    var sorted = [];
    var temp=0;
    var comp = false;
    while (!comp) {
        comp = true;
        for (var i = 1; i <= 3; i++) {
            if (collection[i - 1].id > collection[i].id) {
                comp = false;
                sorted.push({ id: collection[i - 1].id, name: collection[i - 1].name });
                tmp = collection[i - 1].id ;
                collection[i - 1].id = collection[i].id;
                collection[i].id = tmp;
            }
        }
    }
    console.log(sorted);
    return sorted; 
}
sortRecord();
</script>
</body>
</html>