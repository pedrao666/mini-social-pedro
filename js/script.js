let likeCount = 0;
let dislikeCount = 0;

let curtido = false;
let descurtido = false;

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

                                                                                                    document.getElementById("likeBtn").addEventListener("click", curtir);
                                                                                                    document.getElementById("deslikeBtn").addEventListener("click", descurtir);