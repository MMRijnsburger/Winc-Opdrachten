const doSomethingWithData = async () => {
    const data = await getData();
    console.log("Do something with this data:", data);
};

doSomethingWithData();