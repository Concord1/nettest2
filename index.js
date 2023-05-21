function getAccel(){
    const redis = require('redis');

//     const redisClient = redis.createClient({
//         url:'redis://default:TSnu2tKQb8hj5Ln7trXe@containers-us-west-12.railway.app:8001'
//     });
    
    const redisOptions = {
      host: 'containers-us-west-12.railway.app',
      port: '8001',
      password: 'TSnu2tKQb8hj5Ln7trXe',
    };
    const client = redis.createClient(redisOptions);


    redisClient.set('Hello', 'World');


    // Check for mobile user
    var mobileUser = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var permis = 'granted';
    if(mobileUser){
       DeviceMotionEvent.requestPermission().then(response => {
       permis = response;
      });
    }                                
    if (permis == 'granted') {
      window.addEventListener('deviceorientation',(event) => {
          x = event.alpha;
          y = event.beta;
          z = event.gamma;
          var xElement = document.getElementById("x");
          var yElement = document.getElementById("y");
          var zElement = document.getElementById("z");
          xElement.textContent = "X: " + x.toFixed(2);
          yElement.textContent = "Y: " + y.toFixed(2);
          zElement.textContent = "Z: " + z.toFixed(2);
       });
     }
  }
   
