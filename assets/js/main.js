function myFunction(x) {
  x.classList.toggle("change");
}

AOS.init();

// magnific popup start
  // for single image
$('.single-image').magnificPopup({
  type: 'image',
  mainClass: 'mfp-with-zoom', // this class is for CSS animation below

  zoom: {
    enabled: true, // By default it's false, so don't forget to enable it

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
    opener: function(openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }

});
$(document).ready(function() {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it

      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function
    },
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      cursor: 'mfp-zoom-out-cur',
      verticalFit: true,
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>by Sontos Chandra Shil</small>';
      },

    }
  });
});
$(document).ready(function(){
  $("img.mfp-img").click(function(){
    $("img.mfp-img").animate({width: '1400px', height: '3000px !important'});
  });
});
// magnific popup end


// chart start
window.onload = function () {
  var chartTitle = document.getElementById("chart-title").value;
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title:{
      text: chartTitle
    },
    axisY: {
      title: "Completed Projects",
      valueFormatString: "#0",
      suffix: "Projects",
      stripLines: [{
        value: 192,
        label: "Average"
      }]
    },
    data: [{
      yValueFormatString: "#,### Projects",
      xValueFormatString: "YYYY",
      type: "spline",
      dataPoints: [
        {x: new Date(2016, 0), y: 126},
        {x: new Date(2017, 0), y: 158},
        {x: new Date(2018, 0), y: 204},
        {x: new Date(2019, 0), y: 210},
        {x: new Date(2020, 0), y: 150},
        {x: new Date(2021, 0), y: 256}
      ]
    }]
  });
  chart.render();

  }
// chart end
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1800) {
    document.getElementById("progress-bar1").style.width = "95%";
    document.getElementById("progress-bar2").style.width = "98%";
    document.getElementById("progress-bar3").style.width = "99%";
    document.getElementById("progress-bar4").style.width = "96%";
    document.getElementById("progress-bar5").style.width = "80%";
    document.getElementById("progress-bar6").style.width = "90%";
    document.getElementById("progress-bar7").style.width = "100%";
  } else {
    document.getElementById("progress-bar1").style.width = "0%";
    document.getElementById("progress-bar2").style.width = "0%";
    document.getElementById("progress-bar3").style.width = "0%";
    document.getElementById("progress-bar4").style.width = "0%";
    document.getElementById("progress-bar5").style.width = "0%";
    document.getElementById("progress-bar6").style.width = "0%";
    document.getElementById("progress-bar7").style.width = "0%";
  }
}


