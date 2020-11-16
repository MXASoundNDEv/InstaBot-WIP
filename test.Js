if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " SOME_PARAM");
    process.exit(-1);
}
 
var id = process.argv[2];
var startUrl = "https://www.instagram.com/p/"+id;
console.log(startUrl)