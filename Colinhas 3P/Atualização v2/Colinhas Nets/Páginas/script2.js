let myImput = sessionStorage.getItem("dado");
document.querySelector("#name").textContent = sessionValue;

function showMenu() {
  var welcomeDiv = document.getElementById("welcome");
  var cancelPageDiv = document.getElementById("Menu");
  
  welcomeDiv.classList.add("hidden");
  cancelPageDiv.classList.remove("hidden");
  
  var currentDate = new Date();
  var daysToAdd = 4; 

var currentDate = new Date();
  var daysToAdd = 4; }
function Tabs() {
  var welcomeDiv = document.getElementById("welcome");
  var cancelPageDiv = document.getElementById("Tabs");
  
  welcomeDiv.classList.add("hidden");
  tabButtons.classList.remove("hidden");
}

function changeTab(evt, tabName) {

  // Oculta todas as abas
  const tabs = document.getElementsByClassName('tab');
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = 'none';
  }

  // Remove a classe "active" de todos os botões de abas
  const tabButtons = document.getElementsByClassName('tabButton');
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove('active');
  }

  // Exibe a aba selecionada e marca o botão como "active"
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.classList.add('active');
}

function copyToClipboard(message) {
  const el = document.createElement('textarea');
  el.value = message;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
 ;
}






  /*!!!PAGO NÃO DESPACHADO!!!*/ 




function acionarseller() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  // Adiciona os dias úteis à data atual
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Lojista\n\n" +
                "Por favor, despachar o pedido e informar o rastreamento atualizado em até 4 dias úteis, contados a partir da abertura do protocolo.\n\n"+
                "Caso não tenhamos retorno conclusivo, cliente será atendido.\n\n"+
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}

function cobrarChec() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  // Adiciona os dias úteis à data atual
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Lojista\n\n" +
                "Devido insucesso / recusa produto retornou ao estoque conforme rastreio:link/xxx , por gentileza realizar check-in.\n\n"+
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}

function pedidoentreg(){
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  // Adiciona os dias úteis à data atual
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message =  "Olá!\n\n"+
                 "Tudo bem com você? Espero que sim!\n\n"+
                 "Recebemos retorno da transportadora responsável pela entrega do seu pedido, informando que seu pedido foi entregue normalmente no endereço de cadastro.\n\n"+
                 "Em caso de dúvidas, estamos à disposição!\n\n"+
                  myImput + "\n" +
                 "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);   
    });
}

function clienteatendido() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  // Adiciona os dias úteis à data atual
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Devido à falta de cumprimento do SLA do Lojista, cliente atendido com a devolução de valores/vale-compra.\n\n"+
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);   
    });
}

function romaneio() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Lojista\n\n"+
                "Por gentileza disponibilizar romaneio de coleta em arquivo para que possamos cobrar a transportadora do despacho do produto. Aguardaremos até 4 dias úteis, contados a  partir da data de abertura do protocolo.\n\n" +       
                "Na impossibilidade do envio, realize o check-in no portal.\n\n"+
                "Caso não tenhamos retorno conclusivo cliente será atendido.\n\n"+         
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}


function semretorno() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Lojista\n\n"+
                "Por gentileza precisamos de um prazo para conclusão do atendimento. Aguardamos retorno conclusivo até o dia XX/08.\n\n" +
                "Caso não obtivermos o retorno até lá seguiremos com o débito.\n\n" +             
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}

function despachadorecente() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Central.\n\n"+
                "Pedido foi despachado no dia xx/xx, orientar o cliente a aguardar até o dia xx/08 atualização do rastreio.\n\n" +                
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}

function faturadorecente() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Central.\n\n"+
                "Pedido foi faturado no dia xx/xx, lojista tem até o dia xx/08 (4 dias úteis) para despachar o produto, orientar o cliente a aguardar a data informada.\n\n" +                
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}

function noprazo() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Central, \n\n " +
                "Abrimos o protocolo se o pedido não for despachado, e estiver faltando 4 dias úteis para vencer o prazo de entrega. Devemos aguardar até o dia XX/08 para que o pedido seja despachado.\n\n" +                
                "Caso não ocorra o despacho dentro do prazo, reabrir o protocolo.\n\n"+
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}









  // !!!!!!!!!NOVO CANCELAMETO - MKT!!!!! // 




   function prontofaturar() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Lojista\n\n"+
                "Conforme orientação da coordenação todos os pedidos com status pronto para faturar serão cancelados conforme solicitação dos clientes.\n\n" +                
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}


function faturado() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Lojista\n\n"+
                "Pedido com status faturado, por gentileza seguir com o check-in cliente não deseja mais receber o produto, caso não tenhamos retorno conclusivo até o dia xx/08 seguiremos com o débito.\n\n" +                
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}


function despachado() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Central.\n\n"+
                "Pedido já foi despachado, caso cliente queira seguir com o cancelamento será necessário fazer a recusa do item no ato da entrega.\n\n" +                
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}






// !!!!!!! ATRASO ENTREGA - MLE!!!!!!! //




function acionartransportadora() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Central.\n\n"+
                "Transportadora acionada, solicitamos agilidade na entrega e atualização no rastreamento aguardamos retorno da transportadora até o dia xx/08.\n\n" +                
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}


function abertopi() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Central.\n\n"+
                "Em atenção à análise sobre o pedido, identificamos a necessidade da abertura de PI (Pedido de informação). Com a solicitação Favor, Atualizar rastreamento. Não havendo posicionamento até o dia XX/08, acataremos a solicitação do cliente com novo pedido ou devolução de valores.\n\n" +                
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}


function retirarcorreios() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Central.\n\n"+
                "Pedido está aguardando retirada na agência dos correios, para retirar é só comparecer a agência com documento com foto e o código de rastreio xxxxxxxxxxxx.\n\n" +
                "Segue endereço para retirada:\n\n" +
                 "\n\n" +                
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}

function confirmarentrega() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Central.\n\n"+
                "O pedido já foi entregue, caso o cliente desconheça a entrega será necessário abrir protocolo de inconformidade na entrega MLE.\n\n" +                
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}

function rastreioatt() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Central.\n\n"+
                "O Rastreio foi atualizado recentemente, sendo assim o pedido será entregue até o dia xx/08.\n\n" +                
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}

function rotaentrega() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Central.\n\n"+
                "Pedido em rota de entrega, serão realizadas três tentativas de entrega no caso de insucesso o pedido retornará ao estoque do nosso lojista.\n\n" +                
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}



function cobrarcheck() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Lojista.\n\n"+
                "Produto retornou ao estoque, por gentileza realizar check-in.\n\n" +   
                "Caso não tenhamos retorno conclusivo cliente será atendido.\n\n" +           
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}



function romaneio1() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Lojista\n\n"+
                "Por gentileza disponibilizar romaneio de coleta em arquivo para que possamos cobrar a transportadora do despacho do produto, aguardaremos retorno em até 5 dias úteis, contados a partir da abertura do protocolo.\n\n" +       
                "Na impossibilidade do envio, realize o check-in no portal.\n\n"+
                "Caso não tenhamos retorno conclusivo cliente será atendido.\n\n"+         
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}






 // !!!!!!! INCONFORMIDADE MLE !!!!!!! //





function acareacaomle() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Central.\n\n"+
                "Foi solicitado à transportadora acareação aguardamos retorno da mesma até o dia xx/08, para informar o prazo final do processo.\n\n" +                
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}

function novaentrega() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Central.\n\n"+
                "A transportadora foi acionada, solicitamos nova tentativa de entrega e aguardamos retorno até o dia xx/08.\n\n" +                
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}

function solidevol() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Central.\n\n"+
                "Transportadora acionada, foi solicitada a devolução do item ao estoque para que possamos seguir com o atendimento ao cliente, aguardamos retorno até o dia xx/08.\n\n" +                
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}

function rotadevol() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Central.\n\n"+
                "Pedido se encontra em rota de devolução ao estoque do seller, cliente será atendido com vale compras em até 3 dias úteis.\n\n" +                
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}


function extravio() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Central.\n\n"+
                "Pedido foi extraviado, cliente será atendido com vale compras em até 3 dias úteis.\n\n" +                
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}


function prazoacarea() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Central.\n\n"+
                "Retorno da acareação previsto até XXXX, caso não ocorra retorno seguiremos com o atendimento do cliente em XXXX.\n\n" +                
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}

function novoprazoEntr() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá!\n\n"+
                "Rastreamento da entrega do pedido foi atualizado recentemente, por isso uma nova data foi gerada.\n\n" +     
                "A previsão de entrega é até o dia XX/XX.\n\n"+           
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}

function SemRetornTrans() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá!\n\n"+
                "Devido à falta de retorno conclusivo da transportadora, cliente atendido com a devolução de valores/vale-compra.\n\n" +            
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}



     // !!!!!!! ATRASO MKT !!!!!!! //




 
     function cobrarentrega() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Lojista\n\n"+
                "Por favor, solicite atualização no rastreio e agilidade na entrega com urgência.\n\n" +        
                "Na impossibilidade da entrega, solicite a devolução ao estoque e realize check-in.\n\n" +        
                "Caso não tenhamos retorno conclusivo, iremos atender o cliente.\n\n" +           
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}

function noprazomkt() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Central.\n\n"+
                "O pedido está dentro do prazo de entrega.\n\n" +        
                "Orientar o cliente aguardar a entrega, pois será entregue nos próximos dias.\n\n" +              
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}
          

function rotadevolmkt() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Lojista.\n\n"+
                "Pedido se encontra em rota de devolução ao estoque do seller.\n\n" +        
                "Favor, solicitar devolução ao estoque e seguir com o Check-in.\n\n" +  
                "Caso não tenhamos retorno conclusivo, iremos atender o cliente.\n\n" +        
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}


function tramitar() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message ="Olá, Lojista.\n\n"+
                "Por favor, somente atribua atendimento a Netshoes quando o caso for resolvido.\n\n" +             
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}


function baixaindev() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message ="Olá, Central.\n\n"+
                "Marketplace NÃO atende Netshoes 1P ou ML ENTREGAS.\n\n" +             
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}








     // !!!!!!! Divergencia !!!!!!! //





     function solienvio() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message ="Olá, Lojista.\n\n"+
                "Será possível o envio do item faltante? Caso não seja possível, realize o check-in.\n\n" +    
                "Caso não tenhamos retorno conclusivo, iremos atender o cliente.\n\n" +              
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}


      // TROCA \\



function troca1() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  // Adiciona os dias úteis à data atual
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Devido à falta de cumprimento do SLA do Lojista, cliente atendido com a devolução de valores/vale-compra/troca.\n\n"+
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);   
    });
}

function selleratendeu(){
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  // Adiciona os dias úteis à data atual
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Cliente atendido pelo lojista com a devolução de valores/vale-compra/troca.\n\n"+
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);   
    });
}


function postagem(){
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  // Adiciona os dias úteis à data atual
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message =  "Olá, XXX!\n\n"+
                 "Tudo bem com você? Espero que sim!\n\n"+
                 "Segue a autorização de postagem para envio do produto.\n\n"+
                 "Código da Autorização de Postagem: XXXX.\n"+
                 "Data de Validade:XXXX. \n\n"+
                 "Para utilizá-la, o consumidor deverá se dirigir a uma Agência Própria ou Franqueada dos Correios, levando consigo, obrigatoriamente, o Código de Autorização e o objeto para postagem.\n\n"+
                 "Guarde o comprovante de postagem até que a sua solicitação tenha sido totalmente atendida, tá?\n\n"+
                 "Qualquer dúvida, estou aqui para te ajudar.\n\n"+
                 "Uma ótima semana para você!\n\n"+
                  myImput + "\n" +
                 "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);   
    });
}





  
              // INCONFORMIDADE MKT \\  




              function noprazomkt1() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Central.\n\n"+
                "O pedido está dentro do prazo de entrega.\n\n" +       
                "Prazo: XXXX.\n\n" + 
                "Orientar o cliente aguardar a entrega, pois será entregue nos próximos dias.\n\n" +              
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}


function trocaentregue() {

  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Central.\n\n"+
                "Conforme Processo de Troca ***, cliente recebeu pedido e solicitou troca/devolução. .\n\n" +       
                "Sendo assim, finalizarei o protocolo como concluído.\n\n" +              
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}



function acareacaomkt() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Lojista.\n\n"+
                "Caso não tenhamos retorno com a acareação até o prazo final do protocolo, atenderemos o cliente com débito.\n\n" +       
                "Obedeceremos os prazos SLA acordados em contrato.\n\n" +              
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}


function semretorcli() {
  var currentDate = new Date();
  var daysToAdd = 4; // Número de dias úteis a serem adicionados
  
  while (daysToAdd > 0) {
    currentDate.setDate(currentDate.getDate() + 1);
    var dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  var formattedDate = currentDate.toLocaleDateString("pt-BR");
  
  var message = "Olá, Central.\n\n"+
                "Como o cliente não retornou desde a abertura do protocolo, será enviado um e-mail no e-mail cadastrado do cliente de confirmação de recebimento.\n\n" +       
                "Caso cliente retorne informando que não recebeu o pedido, por gentileza reabrir protocolo que atenderemos com acareação.\n\n" +              
                 myImput + "\n" +
                "Backoffice Netshoes";
  // Copia a mensagem para a área de transferência
  navigator.clipboard.writeText(message)
    .then(function() {
      ;
    })
    .catch(function(error) {
      console.error("Erro ao copiar a mensagem: ", error);
    });
}
