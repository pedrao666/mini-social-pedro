//===ESTADDO (dados da aplicaçao) ===

let likeCount = 0;
let dislikeCount = 0;

let curtido = false;
let descurtido = false;

//=== SERVICE(regras de negocio) ===

function curtir() {
  if (!curtido) {
      likeCount++;
          curtido = true;

              // se tinha dislike, remove
                  if (descurtido) {
                        dislikeCount--;
                              descurtido = false;
                                  }
                                    } else {
                                        likeCount--;
                                            curtido = false;
                                              }

                                                atualizarTela();
                                                }

                                                function descurtir() {
                                                  if (!descurtido) {
                                                      dislikeCount++;
                                                          descurtido = true;

                          // se tinha like, remove
                                     if (curtido) {
                                 likeCount--;
                                                                              curtido = false;
                                                                                  }
                                                                                    } else {
                                                                                        dislikeCount--;
                                                                                            descurtido = false;
                                                                                              }

                                                                                                atualizarTela();
                                                                                                }

                                                                                                function atualizarTela() {
                                                                                                  document.getElementById("likeCount").innerText = likeCount;
                                                                                                    document.getElementById("deslikeCount").innerText = dislikeCount;
                                                                                                    }
//=== CONTROLER (intermediaçao)===

function clicarCurtir(){
  curtir();
}
function clicarDescurtir(){
  descurtir();
}

                                                              // === EVENTOS ===

                                                                                                    document.getElementById("likeBtn").addEventListener("click", clicarCurtir);
                                                                                                    document.getElementById("deslikeBtn").addEventListener("click", clicarDescurtir);