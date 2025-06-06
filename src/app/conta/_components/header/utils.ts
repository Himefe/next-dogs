export const getHeaderTitleByPathname = (pathname: string) => {
    const pathsMap: Record<string, string> = {
        "/conta": "Minha Conta",
        "/conta/estatisticas": "Estatísticas",
        "/conta/postar": "Postar Foto",
    };

    return pathsMap[pathname] || "";
};
