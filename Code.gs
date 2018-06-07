function createSurvey(title, speaker, number) {
  var fullTitle = number +'. '+ title + ' - ' + speaker;
  var form = FormApp.create(fullTitle);
  var DESCRIPTION = 'Ayúdenos a mejorar, esta encuesta busca encontrar las oportunidades de mejora que tenemos para las sesiones de enablement de Cisco';
  var fullURL = '';
  var shortURL = '';

  form.setTitle(fullTitle);
  form.setDescription(DESCRIPTION);

	var item = form.addMultipleChoiceItem();
    item.setRequired(true);
	item.setTitle('Seleccione su país');
	item.setChoices([
      item.createChoice('Argentina'),
      item.createChoice('Chile'),
      item.createChoice('Colombia'),
      item.createChoice('Paraguay'),
      item.createChoice('Uruguay'),
      item.createChoice('Webex'),
      item.createChoice('Otro')
  ]);

  form.addMultipleChoiceItem()
    .setRequired(true)
    .setTitle('Por favor, evalúe a '+ speaker +' como Speaker')
    .setChoices([
      item.createChoice('Muy Bueno'),
      item.createChoice('Bueno'),
      item.createChoice('Promedio'),
      item.createChoice('Bajo el promedio'),
      item.createChoice('Pobre')
    ]);

  form.addMultipleChoiceItem()
    .setRequired(true)
    .setTitle('Por favor, evalúe a '+speaker+' en su conocimiento sobre '+ title)
    .setChoices([
      item.createChoice('Muy Bueno'),
      item.createChoice('Bueno'),
      item.createChoice('Promedio'),
      item.createChoice('Bajo el promedio'),
      item.createChoice('Pobre')
    ]);

  form.addParagraphTextItem()
    .setTitle('Si lo estima conveniente, ingrese acá sus comentarios adicionales')
  
  fullUrl = form.getPublishedUrl();
  shortUrl = form.shortenFormUrl(form.getPublishedUrl());
  return shortUrl
}

function readSpeakers() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var url = '';
  
  for (var i = 1; i < data.length; i++) {
    var order = data[i][0];
    var speaker = data[i][1];
    var title = data[i][2];
    var urlRow = data[i][3];
    
    url = createSurvey(title, speaker, order);
    //Logger.log("Speaker: %s, Title: %s, URL: %s", speaker, title, url);
    sheet.getRange(i+1, 5).setValue(url);
    SpreadsheetApp.flush();
  }
}

