let input=document.getElementsByTagName('input')[0];
let main=document.getElementsByClassName('main')[0];
let img=document.getElementsByTagName('img')[0];

console.log(img);
let va=false;
main.style.display="none";


function myFunction() {
    va=true;
    document.getElementsByClassName("search")[0].style.borderColor = "blue";
  }
  if(!va){
  document.getElementsByClassName("search")[0].style.borderColor = "#dbd8e9";
  }

  img.addEventListener("click", () =>{
    document.getElementsByClassName('main-content')[0].style.display="block";
    main.style.display="none";
  });
let inp;
input.addEventListener("keypress",function(event) {
    if(event.key=='Enter'){
        // window.location.href='page.html';
        
        // input.innerText=`Search results for ${input.value}`;
        inp=document.querySelector('input');
        console.log(inp.value);

        let display=[];


        courses_each.forEach(function(course){
          if(course.title.indexOf(inp.value)!=-1){
            display.push(course);
          }
        })
        console.log(display);
        let htmlcode='';
        display.forEach(function(course){
          htmlcode+=
          `
          <div class="card">
                            <div class="one">
                              <img width="${course.width}" height="${course.height}" src="${course.pictureUrl}" /> 
                            </div>
                            <div class="desc">
                              <h4>
                                ${course.title}
                              </h4>
                              <p>
                                ${course.time}
                              </p>
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect><rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect><rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect></svg>
                              <span>Beginner</span>
                            </div>
                            <div class="line">
        
                            </div>
        
          
                            <div class="footer">
                              <span>${course.imageAlt}</span>
                            </div>
                          </div>
        
        
          `
        });
        
        document.querySelector('.middle_region .all_cards').innerHTML=htmlcode;

let dis=document.getElementsByClassName('main-content')[0];

        dis.style.display="none";
        main.style.display="block";
        let head=document.querySelector('.result h1');
        head.innerText=`Search results for "${input.value}"`
        input.innerText="";


        // alert( `Entered ${event.target.value}` );
    }
})

const courses_each=[
  {
    id: 1,
    title: "Applying JavaScript and using the console.",
    time: "1 hour 30 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-javascript.jpg",
    imageAlt: "Juanita Bell"
  
  },
  {
    id: 1,
    title: "WordPress:complete WordPress theme and plugin",
    time: "2 hours 30 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-wordpress.jpg",
    imageAlt: "Claire Robertson"
  
  },
  {
    id: 2,
    title: "CSS: ultimate CSS course from beginner to advanced",
    time: "1 hour 30 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-css.jpg",
    imageAlt: "Juanita Bell"
  
  },
  {
    id: 3,
    title: "Gatsby JS: build blog with GraphQL and React",
    time: "3 hours 56 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-gatsby.jpg",
    imageAlt: "Morris Mcoey"
  
  },
  {
    id: 1,
    title: "How to easily create a website with React",
    time: "3 hours 30 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-react.jpg",
    imageAlt: "Morris Mcoey"
  
  },
  {
    id: 2,
    title: "GraphQL: introduction to graphQL for beginners",
    time: "2 hours 46 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-graphql.jpg",
    imageAlt: "Ted Hawkins"
  
  },
  {
    id: 3,
    title: "Angular - the complete guide for beginner",
    time: "1 hour 30 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-angular.jpg",
    imageAlt: "Juanita Bell"
  
  },
  {
    id: 3,
    title: "The Python Course: build web application ",
    time: "3 hours 30 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-python.jpg",
    imageAlt: "Claire Robertson"
  
  },
  
  
]

const courses_one=[
  {
    id: 1,
    title: "How to easily create a website with React",
    time: "3 hours 30 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-react.jpg",
    imageAlt: "Morris Mcoey"
  
  },
  {
    id: 2,
    title: "GraphQL: introduction to graphQL for beginners",
    time: "2 hours 46 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-graphql.jpg",
    imageAlt: "Ted Hawkins"
  
  },
  {
    id: 3,
    title: "Angular - the complete guide for beginner",
    time: "1 hour 30 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-angular.jpg",
    imageAlt: "Juanita Bell"
  
  },
  {
    id: 3,
    title: "The Python Course: build web application ",
    time: "3 hours 30 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-python.jpg",
    imageAlt: "Claire Robertson"
  
  },
  


]
let htmlcode='';

courses_one.forEach(function(course){
  htmlcode+=
  `
  <div class="card">
                    <div class="one">
                      <img width="${course.width}" height="${course.height}" src="${course.pictureUrl}" /> 
                    </div>
                    <div class="desc">
                      <h4>
                        ${course.title}
                      </h4>
                      <p>
                        ${course.time}
                      </p>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect><rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect><rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect></svg>
                      <span>Beginner</span>
                    </div>
                    <div class="line">

                    </div>

  
                    <div class="footer">
                      <span>${course.imageAlt}</span>
                    </div>
                  </div>


  `
});

document.querySelector('.first_part .cards').innerHTML=htmlcode;

const courses_two=[
  {
    id: 1,
    title: "Applying JavaScript and using the console.",
    time: "1 hour 30 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-javascript.jpg",
    imageAlt: "Juanita Bell"
  
  },
  {
    id: 1,
    title: "WordPress:complete WordPress theme and plugin",
    time: "2 hours 30 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-wordpress.jpg",
    imageAlt: "Claire Robertson"
  
  },
  {
    id: 2,
    title: "CSS: ultimate CSS course from beginner to advanced",
    time: "1 hour 30 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-css.jpg",
    imageAlt: "Juanita Bell"
  
  },
  {
    id: 3,
    title: "Gatsby JS: build blog with GraphQL and React",
    time: "3 hours 56 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-gatsby.jpg",
    imageAlt: "Morris Mcoey"
  
  },
  

]

let htmlcode_two='';

courses_two.forEach(function(course){
  htmlcode_two+=
  `
  <div class="card">
                    <div class="one">
                      <img width="${course.width}" height="${course.height}" src="${course.pictureUrl}" /> 
                    </div>
                    <div class="desc">
                      <h4>
                        ${course.title}
                      </h4>
                      <p>
                        ${course.time}
                      </p>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect><rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect><rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect></svg>
                      <span>Beginner</span>
                    </div>
                    <div class="line">

                    </div>

  
                    <div class="footer">
                      <span>${course.imageAlt}</span>
                    </div>
                  </div>


  `
});

document.querySelector('.second_part .cards').innerHTML=htmlcode_two;










