// all your signatures

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

show(new Date());
show("slow");
show(500);
show(function(){})
show({ delay: 123, target: null })