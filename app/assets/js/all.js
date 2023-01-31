console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
});

$(document).ready(function(){
    $(".address").hide(); 
});

$(document).ready(function(){
  $("button.mail").click(function(){
    $(".email").hide();
    $(".address").show();
    $(".eleticbill").removeClass("bg-white text-[#3F5D45]");
    $(".eleticbill").addClass("bg-[#3F5D45] text-white");
    $(".mail").removeClass("bg-[#3F5D45] text-white");
    $(".mail").addClass("bg-white text-[#3F5D45]");
  });
});

$(document).ready(function(){
  $("button.eleticbill").click(function(){
    $(".address").hide();
    $(".email").show();
    $(".eleticbill").removeClass("bg-[#3F5D45] text-white");
    $(".eleticbill").addClass("bg-white text-[#3F5D45]");
    $(".mail").removeClass("bg-white text-[#3F5D45]");
    $(".mail").addClass("bg-[#3F5D45] text-white");
  });
});




$(document).ready(function(){
  $(".collapse-button").click(function(){
    $(".collapse-block").toggleClass("hidden");
  });
});