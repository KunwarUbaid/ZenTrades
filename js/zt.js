let graph=document.getElementById('graph').getContext('2d');
      let masspopChart= new Chart(graph, {
        type:'horizontalBar',
        data:{
          labels:['Everett', 'Seattle', 'Lynnwood', 'Bophell', 'Mukilteo', 'Edmonds'],
          datasets:[{
            axis: 'y',
            label: 'Revenue for November 2019',
            data:[
             90000,
             80000,
             49000,
             45000,
             43000,
             34000,
            ],
            backgroundColor:'#04884ab4',
            hoverBorderWidth:3,
            hoverBorderColor:'white'
          }]
        },
        options:{
          title:{
            display:true,
            text:'Revenue for November 2019',
            fontSize: 20
          },
          legend:{
            display:false
          }
        }
      });


let graph2=document.getElementById('graph2').getContext('2d');
      let masspopChart2= new Chart(graph2, {
        type:'horizontalBar',
        data:{
          labels:['Service Plumbing', 'Bid Work HVAC', 'Service HVAC', 'Bid Work Plumbing', 'HWT Replacement', 'Maintenance', 'Material Sale'],
          datasets:[{
            axis: 'y',
            label: 'Revenue for November 2019',
            data:[
             200000,
             120000,
             80000,
             78000,
             43000,
             42000,
             1000,
            ],
            backgroundColor:'#04884ab4',
            hoverBorderWidth:3,
            hoverBorderColor:'white'
          }]
        },
        options:{
          title:{
            display:true,
            text:'Revenue for November 2019',
            fontSize: 20
          },
          legend:{
            display:false
          }
        }
      });

      function CheckPassword(inputtxt) 
      { 
        var decimal=  /^(?=.*[@])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
        if(inputtxt.value.match(decimal)) 
        { 
          var str2='SmartServTest@123';
          var n = inputtxt.value.localeCompare(str2);
          if(n == 0){
            window.location.href = "dashboard.html";
            return false;
          }
          else{
            alert("Password valid! Not allowed to Login")
          }
          return true;
        }
        else
        { 
        alert('Password should contain atleast 1 Capital, 1 Small letter, Numerical value and only @ as special character.')
        return false;
        }
      }

      function checkEmail() {

      var email = document.getElementById('email');
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if (!filter.test(email.value)) {
      alert('Please provide a valid username in form of E-Mail');
      email.focus;
      return false;
      }
      }
