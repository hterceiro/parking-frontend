angular.module('estacionamento', []);

angular.module('estacionamento').controller('Rest', function ($scope, $http) {

    $scope.listarVagas = function () {
        $http.get('http://127.0.0.1:8080/api/vagas').success(function (data) {
                $scope.vagas = data;
            }
        );
    }

    $scope.listarVagasDisponiveis = function () {
        $http.get('http://127.0.0.1:8080/api/vagas-disponiveis').success(function (data) {
                $scope.vagas = data;
            }
        );
    }

    $scope.cadastrarVaga = function(vaga) {
        var numero = vaga.numero;
        var fileira = vaga.fileira;

        var jsonObj = { numero: numero, fileira : fileira };
        $http.post('http://127.0.0.1:8080/api/cadastrar-vaga', jsonObj)
            .success(function(data, status, headers, config) {
                alert(status);

            })
            .error(function(data, status, headers, config) {
                alert(status);
            });
    }

    $scope.estacionarVeiculo = function(veiculo) {
        var placa = veiculo.placa;
        var idVaga = veiculo.idVaga;
        var jsonObj = { placa: placa };

        $http.post('http://127.0.0.1:8080/api/estacionar-veiculo-vaga/' + idVaga, jsonObj)
            .success(function(data, status, headers, config) {
                alert(status);

            })
            .error(function(data, status, headers, config) {
                alert(status);
            });
    }

    $scope.pagarEstacionamento = function(ticket) {
        var idEstacionamento = ticket.idEstacionamento;
        var valorPago = ticket.valorPago;
        var jsonObj = { idEstacionamento: idEstacionamento, valorPago: valorPago };

        $http.post('http://127.0.0.1:8080/api/pagar-ticket', jsonObj)
            .success(function(data, status, headers, config) {
                alert(status);

            })
            .error(function(data, status, headers, config) {
                alert(status);
            });
    }

    $scope.dadosEstacionamento = function () {
        $http.get('http://127.0.0.1:8080/api/dados-estacionamento').success(function (data) {
                $scope.vagas = data;
            }
        );
    }

    $scope.listarVagasOcupadas = function () {
        $http.get('http://127.0.0.1:8080/api/vagas-ocupadas').success(function (data) {
                $scope.vagas = data;
            }
        );
    }

    $scope.listarTickets = function () {
        $http.get('http://127.0.0.1:8080/api/estacionamento/').success(function (data) {
                $scope.tickets = data;
            }
        );
    }

    $scope.getRendimento = function (datas) {
        var dataInicial = datas.dataInicial;
        var dataFinal = datas.dataFinal;
        $http.get('http://127.0.0.1:8080/api/rendimentos-periodo/' + dataInicial + '/' + dataFinal ).success(function (data) {
                $scope.rendimentos = data[0];
                $scope.valorRendimento = data[1];
                console.log( data[1])

            }
        );
    }

});