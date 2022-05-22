// selecting elements

const AddBtn = document.querySelector(".Add");
const ClearBtn = document.querySelector(".Clear");

const AddTaskInput = document.querySelector(".AddtaskInput");
const SearchTaskInput = document.querySelector(".SearchtaskInput");

const tasks = document.querySelector(".tasks");

// functions

const Addtask = () => {
  let AddTaskInputContent = AddTaskInput.value;

//   <div class="task  border d-flex justify-content-between ">

//           <p class="TaskContent p-2 " >dsdsdsdsd</p>
//           <span class="bg-dark p-3 " >
//               <a href="" class=" text-white text-decoration-none"> X</a>
//           </span>

//   </div>

  if (AddTaskInputContent == "") {
    alert("please add a task");
    return;
  }
  const task = document.createElement("div");
  task.classList.add(
    "task",
    "border",
    "d-flex",
    "justify-content-between",
    "mb-3"
  );

  const paragraph = document.createElement("p");
  paragraph.classList.add("TaskContent", "p-2");
  paragraph.textContent = AddTaskInputContent;

  task.appendChild(paragraph);

  const span = document.createElement("span");
  span.classList.add("bg-dark", "p-3");
  task.appendChild(span);

  const a = document.createElement("a");
  a.classList.add("text-decoration-none", "text-white");
  a.textContent = "X";
  a.href = "#";
  span.appendChild(a);

  tasks.appendChild(task);
  AddTaskInputContent = "";

  a.addEventListener("click", function () {
    tasks.removeChild(task);
  });
};

// search task

const searchtask = () => {
  const paragraphList = document.querySelectorAll(".TaskContent");

  console.log(paragraphList);

  paragraphList.forEach((text) => {
    if (
      text.textContent
        .toLowerCase()
        .includes(SearchTaskInput.value.toLowerCase())
    ) {
      text.parentElement.classList.remove("d-none");
    } else {
      text.parentElement.classList.add("d-none");
    }
  });
};

AddBtn.addEventListener("click", Addtask);

ClearBtn.addEventListener("click", function () {
  tasks.textContent = "";
});

SearchTaskInput.addEventListener("input", searchtask);







// selecting elements

const AddBtn1 = document.querySelector(".Add1");
const ClearBtn1 = document.querySelector(".Clear1");

const AddTaskInput1 = document.querySelector(".AddtaskInput1");
const SearchTaskInput1 = document.querySelector(".SearchtaskInput1");

const tasks1 = document.querySelector(".tasks1");

// functions

const Addtask1 = () => {
  let AddTaskInputContent1 = AddTaskInput1.value;

//   <div class="task  border d-flex justify-content-between ">

//           <p class="TaskContent p-2 " >dsdsdsdsd</p>
//           <span class="bg-dark p-3 " >
//               <a href="" class=" text-white text-decoration-none"> X</a>
//           </span>

//   </div>

  if (AddTaskInputContent1 == "") {
    alert("please add a task");
    return;
  }
  const task1 = document.createElement("div");
  task1.classList.add(
    "task",
    "border",
    "d-flex",
    "justify-content-between",
    "mb-3"
  );

  const paragraph1 = document.createElement("p");
  paragraph1.classList.add("TaskContent", "p-2");
  paragraph1.textContent = AddTaskInputContent1;

  task1.appendChild(paragraph);

  const span = document.createElement("span");
  span.classList.add("bg-dark", "p-3");
  task1.appendChild(span);

  const a1 = document.createElement("a");
  a1.classList.add("text-decoration-none", "text-white");
  a1.textContent = "X";
  a1.href = "#";
  span.appendChild(a);

  tasks.appendChild(task1);
  AddTaskInputContent1 = "";

  a1.addEventListener("click", function () {
    tasks1.removeChild(task1);
  });
};

// search task

const searchtask1 = () => {
  const paragraphList1 = document.querySelectorAll(".TaskContent1");

  console.log(paragraphList1);

  paragraphList1.forEach((text1) => {
    if (
      text1.textContent
        .toLowerCase()
        .includes(SearchTaskInput.value.toLowerCase())
    ) {
      text1.parentElement.classList.remove("d-none");
    } else {
      text1.parentElement.classList.add("d-none");
    }
  });
};

AddBtn1.addEventListener("click", Addtask1);

ClearBtn1.addEventListener("click", function () {
  tasks1.textContent = "";
});

SearchTaskInput1.addEventListener("input", searchtask1);
