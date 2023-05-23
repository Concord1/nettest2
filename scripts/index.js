function getAccel(){
    
  
    require(['redis'], function (redis) {
 
    try {
        const client = redis.createClient({
          url: 'redis://default:84rJ6VbP7OM7zPeYhOzuLr7NW0PDtENX@redis-13485.c265.us-east-1-2.ec2.cloud.redislabs.com:13485'
        });
        client.on('error', err => console.log('Redis Client Error', err));
        client.connect();
        client.set('key', 'value');
        
    } catch (ex) {
        var xElement = document.getElementById("x");
        xElement.textContent = "X: " + ex;
    }
    });
    



    





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
   
