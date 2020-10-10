import { Item } from "../../../interfaces";

export class Feito {
    items: Item[] = [
        {"id":1,"nome":"A\u00e7\u00e3o em Movimento","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":70,"nome":"Adapta\u00e7\u00e3o ao Ambiente","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":2,"nome":"Agarrar Aprimorado","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":3,"nome":"Agarrar Instant\u00e2neo","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":4,"nome":"Agarrar Preciso","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":5,"nome":"Alvo Esquivo","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":71,"nome":"Ambidestria","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":6,"nome":"Ambiente Favorito","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":7,"nome":"Arma\u00e7\u00e3o","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":8,"nome":"Arremessar Aprimorado","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":46,"nome":"Art\u00edfice","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":47,"nome":"Assustar","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":9,"nome":"Ataque Acurado","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":10,"nome":"Ataque Atordoante","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":11,"nome":"Ataque Defensivo","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":12,"nome":"Ataque Dograduacao_min\u00f3","graduacao_max":2,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":13,"nome":"Ataque Furtivo","graduacao_max":4,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":14,"nome":"Ataque Imprudente","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":15,"nome":"Ataque Poderoso","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":48,"nome":"Atraente","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":16,"nome":"Atropelar Aprimorado","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":17,"nome":"Atropelar R\u00e1pido","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":72,"nome":"Avalia\u00e7\u00e3o","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":49,"nome":"Bem Informado","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":50,"nome":"Bem Relacionado","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":73,"nome":"Benef\u00edcio","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":51,"nome":"Blefe Acrob\u00e1tico","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":18,"nome":"Bloquear Aprimorado","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":74,"nome":"Capangas","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":52,"nome":"Contatos","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":19,"nome":"Cr\u00edtico Aprimorado","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":75,"nome":"De P\u00e9","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":20,"nome":"Defesa Aprimorada","graduacao_max":2,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":21,"nome":"Derrubar Aprimorado","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":22,"nome":"Desarmar Aprimorado","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":53,"nome":"Distrair","graduacao_max":2,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":76,"nome":"Duro de Matar","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":54,"nome":"Empatia com Animais","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":77,"nome":"Equipamento","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":55,"nome":"Esconder-se \u00e0 Plena Vista","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":64,"nome":"Esfor\u00e7o Supremo","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":23,"nome":"Especializa\u00e7\u00e3o em Ataque","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":24,"nome":"Esquiva Fabulosa","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":25,"nome":"Estrangular","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":26,"nome":"Evas\u00e3o","graduacao_max":2,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":56,"nome":"Fascinar","graduacao_max":4,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":57,"nome":"Faz-Tudo","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":58,"nome":"Ferramentas Improvisadas","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":27,"nome":"Foco em Ataque","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":28,"nome":"Foco em Esquiva","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":29,"nome":"F\u00faria","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":30,"nome":"Golpe Cr\u00edtico","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":31,"nome":"Imobilizar Aprimorado","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":32,"nome":"Iniciativa Aprimorada","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":65,"nome":"Inspirar","graduacao_max":5,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":78,"nome":"Interpor-se","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":59,"nome":"Inventor","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":66,"nome":"Lideran\u00e7a","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":33,"nome":"Luta Cega","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":34,"nome":"Luta no Ch\u00e3o","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":35,"nome":"Maestria em Arremesso","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":60,"nome":"Maestria em Per\u00edcia","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":79,"nome":"Mem\u00f3ria Eid\u00e9tica","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":36,"nome":"Mira Aprimorada","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":80,"nome":"Mudan\u00e7a R\u00e1pida","graduacao_max":2,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":37,"nome":"Oponente Favorito","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":81,"nome":"Parceiro","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":82,"nome":"Plano Genial","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":38,"nome":"Prender \u00e0 Dist\u00e2ncia","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":39,"nome":"Prender Arma","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":83,"nome":"Presen\u00e7a Aterradora","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":40,"nome":"Quebrar Aprimorado","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":41,"nome":"Quebrar Arma","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":61,"nome":"Rastrear","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":42,"nome":"Redirecionar","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":62,"nome":"Ritualista","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":43,"nome":"Rolamento Defensivo","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":44,"nome":"Saque R\u00e1pido","graduacao_max":2,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":84,"nome":"Segunda Chance","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":85,"nome":"Sem Medo","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":67,"nome":"Sorte","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":68,"nome":"Sorte de Principiante","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":45,"nome":"Tiro Preciso","graduacao_max":2,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":86,"nome":"Toler\u00e2ncia","graduacao_max":0,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":69,"nome":"Tomar a Iniciativa","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":87,"nome":"Trabalho em Equipe","graduacao_max":3,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":88,"nome":"Transe","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
        {"id":63,"nome":"Zombar","graduacao_max":1,"graduacao_min":1,"checked":false,"graduacao":1},
    ];
}
