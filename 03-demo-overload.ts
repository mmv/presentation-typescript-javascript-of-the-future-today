// all your signatures


   
function show(x: "slow" | "fast" );
/** delay in miliseconds */
function show(x: number );
function show(x: Function );
function show(x: { delay: number, target: HTMLElement});
function show(x) {
    if (typeof x === "string") {
        // must be duration
        x;
    } else if (typeof x === "number") {
        // must be number;
        x;
    } else if (x instanceof Function) {
        // must be callback;
        x;
    } else if (typeof x === "object") {
        x;
    } else {
        throw new Error("Invalid Parameter!");
    }
}

jQuery.ajax({
    method: "GET",
    contentType: ""
})

show(new Date());
show("slow");
show(500);
show(function(){})
show({ delay: 123, target: null })