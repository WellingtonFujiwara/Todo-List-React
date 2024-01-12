class Item {

    static lastId = 0;

    constructor(text){
        this.id = Item.validar_e_criar_novo_id();
        this.text = text;
        this.done = false;
    }

    validar_e_criar_novo_id() {
        // aqui eu verifico se o lastId é 0 ou seja
        // se ele foi ajustado depois do reload
        if (Item.lastId === 0) {
          // lembre-se que nossa lista de itens são salvos no localStorage
          const valor_local_storage = localStorage.getItem("savedItems");
    
          // se ele for diferente de null, ou seja se esse valor existir, eu entro aqui
          if (valor_local_storage != null) {
            // pego todos os itens da lista
            const lista_total = JSON.parse(valor_local_storage);
            // verifico se essa lista tem algum item... pelo seu tamanho
            if (lista_total.length > 0) {
              // aqui eu crio uma lista apenas com os ids
              const lista_de_ids = lista_total.map((item) => item.id);
              console.log("lista_de_ids", lista_de_ids);
              // pego o número maior que tem nessa lista
              const maior_id = Math.max(...lista_de_ids);
              console.log("maior_id", maior_id);
              // aqui eu transoformo o valor inicial que seria 0 para o
              // valor que deveria está
              Item.lastId = maior_id;
              return Item.lastId++;
            } else {
              // se não tiver eu só aumento ele...
              return Item.lastId++;
            }
          } else {
            // se entrou aqui é porque não há valor no localStorage
            // fazendo com que entenda-se que valor gerar um id inicial...
            // veja que aqui eu estou retornando para que vá como atributo no constructor..
            return Item.lastId++;
          }
        } else {
          // se entrou aqui o valor de lastId já foi ajustado e deve
          // continuar sendo incrementado da maneira correta
          return Item.lastId++;
        }
    }
}

export default Item;