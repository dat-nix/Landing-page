{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    systems.url = "github:nix-systems/default";
  };

  outputs = {
    systems,
    nixpkgs,
    ...
  } @ inputs: let
    eachSystem = f:
      nixpkgs.lib.genAttrs (import systems) (
        system:
          f nixpkgs.legacyPackages.${system}
      );
  in {
    devShells = eachSystem (pkgs: {
      default = pkgs.mkShell {
        buildInputs = with pkgs; [
          nodejs
          # You can set the major version of Node.js to a specific one instead
          # of the default version
          # pkgs.nodejs-19_x
          nodePackages.typescript
          nodePackages.typescript-language-server
        ];
        NIX_LD_LIBRARY_PATH = nixpkgs.lib.makeLibraryPath [
          pkgs.stdenv.cc.cc
        ];
        NIX_LD = nixpkgs.lib.fileContents "${pkgs.stdenv.cc}/nix-support/dynamic-linker";
      };
    });
  };
}

