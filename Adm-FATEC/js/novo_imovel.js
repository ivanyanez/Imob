var hide = function(except){
  var children_element;
  var element = $("#page-wrapper");
  var childrens = element.children();
  for (var i = 0; i < childrens.length; i++){
      if (childrens[i].id != except){
        $(childrens[i]).css('display', 'none')
      }
  }
};

$('#novo_imovel').click(function(){
   $('#cadastro_novo_imovel').css('display', 'block')
   hide('cadastro_novo_imovel');

});
$("#dados").click(function(){
  $("#form_dados").css("display", "block");

});


$("#valores").click(function(){
  $("#form_valores").css("display", "block");
});


$("#exibicao").click(function()
{
  $("#form_exibicao").css("display","block");
});

$("#descricao").click(function()
{
  $("#form_descricao").css("display","block");
});

$("#proprietario").click(function()
{
  $("#form_proprietarios").css("display","block");
});

$("#adicionar_fotos_salvar").click(function()
{
  $("#form_adicionar_fotos_salvar").css("display","block");
});




var save = function(){

  var finalidade_imovel = $("#finalidade_imovel").val();
  var tipodeimovel_imovel = $("#tipodeimovel_imovel").val();
  var cidade_imovel = $("#cidade_imovel").val();
  var bairro_imovel  = $("#bairro_imovel").val();
  var endereco_imovel = $("#endereco_imovel").val();
  var dormitorios_imovel = $("#dormitorios_imovel").val();
  var banheiros_imovel = $("#banheiros_imovel").val();
  var suites_imovel = $("#suites_imovel").val();

  var params = {
    finalidade_imovel: finalidade_imovel,
    tipodeimovel_imovel: tipodeimovel_imovel,
    cidade_imovel: cidade_imovel,
    bairro_imovel : bairro_imovel,
    endereco_imovel: endereco_imovel,
    dormitorios_imovel: dormitorios_imovel,
    banheiros_imovel: banheiros_imovel,
    suites_imovel: suites_imovel
  };

  $.ajax({
    url: "/",
    datatype: "json",
    type: "POST",
    data: params,
    success: function(){
      alert("Suas alterações foram salvas!");
    },
    error: function(){
      alert("Algo deu errado.");
    }
  });
}

var exibir = function(){
  $.ajax({
    url: "/",
    datatype: "json",
    type: "POST",
    data: {},
    error: function(params){
      params = [
        {
          finalidade_imovel: '1',
          tipodeimovel_imovel: '1',
          id: '1'
        },
        {
          finalidade_imovel: '2',
          tipodeimovel_imovel: '2',
          id: '2'
        }
      ]
      var id, finalidade_imovel, tipodeimovel_imovel;

      for (var i = 0; i < params.length; i++){
        id = params[i].id;
        finalidade_imovel = params[i].finalidade_imovel;
        tipodeimovel_imovel = params[i].tipodeimovel_imovel;

        $('#tbody').append('<tr id="' + id + '"><td id="finalidade_imovel">' +
         finalidade_imovel + '</td>' +
        '<td id="tipodeimovel_imovel">' +  finalidade_imovel + '</td>'+
        '<td><button onclick=del(' + id + ')>delete</button></td>' +
        '<td><button onclick=edit(this)>edit</button></td>' +'</tr>')
      }
    }
  });

};

$("#save").click(save);
$("#mostrar_exibir_imoveis").click(function(){
  $("#exibir_imoveis").css('display', 'block');
  exibir();
  hide('exibir_imoveis');
});





var del = function(id){
  console.log(id);
  $.ajax({
    url: "/",
    datatype: "json",
    type: "POST",
    data: {id: id},
  });

}



var edit = function(element){
  var tr = $(element).parent().parent();
  var childrens = tr.children();
  var possible_elements = ['finalidade_imovel', 'tipodeimovel_imovel'];
  var new_element, content, children_element;

  for (var i = 0; i < childrens.length; i++){
      if (possible_elements.indexOf(childrens[i].id) !== -1){
        children_element = $(childrens[i]);
        content = childrens[i].innerHTML;
        new_element = '<input type=text id="' + childrens[i].id + '" value="' + content +'"/>';
        children_element.replaceWith($(new_element));
      }
  }
}
