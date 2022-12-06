async function scriptData() {
   await getData();
};

scriptData();

// async function getPosts() {

//     try {
//         await postData();
//     } catch {
//        console.error(error);
//     }

// };

// getPosts();

const submitTask = document.getElementById("submitBut");
submitTask.addEventListener("click", function(event) {
    event.preventDefault();
    getInputValue();
    postData();
});

document.addEventListener("click", function(e){
    const target = e.target.closest("#deleteTask"); 
  
    if(target){
        console.log(target.parentElement.id);
        deleteTaskFromList(target.parentElement.id);
    }
  });