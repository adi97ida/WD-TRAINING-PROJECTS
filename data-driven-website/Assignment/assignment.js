

$(document).ready(function() {

    const template = $("#output-template").html();

    const compiledTemplate = Handlebars.compile(template);

    const compiledHTML = compiledTemplate(animals_data);

    $('.content').html(compiledHTML);

});