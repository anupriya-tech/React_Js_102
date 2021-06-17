function sorting() {
    var collection = [{ id: 101, name: 'raj' },
    { id: 121, name: 'rajesh' },
    { id: 130, name: 'suraj' },
    { id: 114, name: 'tom' }];
    var soreted = [];
    var temp=0;
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i <= 3; i++) {
            if (collection[i - 1].id > collection[i].id) {
                done = false;
                soreted.push({ id: collection[i - 1].id, name: collection[i - 1].name });
                tmp = collection[i - 1].id ;
                collection[i - 1].id = collection[i].id;
                collection[i].id = tmp;
            }
        }
    }
    console.log(soreted);
    return soreted; 
}
sorting();
