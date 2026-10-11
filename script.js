function pedir(produto) {

    const telefone = "5593999999999";

    const mensagem = `Olá! Gostaria de pedir: ${produto}`;

    const link =
        `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
}