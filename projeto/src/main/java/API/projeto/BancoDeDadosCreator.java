package API.projeto;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class BancoDeDadosCreator {

    private static final String URL = "jdbc:mysql://localhost:3306/";
    private static final String USER = "root"; // Altere se necessário
    private static final String PASSWORD = "senha"; // Altere se necessário

    public static void criarBancoEDatabase() {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
                Statement stmt = conn.createStatement()) {

            // Cria o banco de dados
            stmt.executeUpdate("CREATE DATABASE IF NOT EXISTS ecogastos");
            System.out.println("Banco de dados 'ecogastos' criado com sucesso!");

            // Usa o banco de dados
            stmt.execute("USE ecogastos");

            // Cria a tabela de usuários
            String criarTabelaUsuarios = """
                        CREATE TABLE IF NOT EXISTS usuarios (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            email VARCHAR(150) NOT NULL UNIQUE,
                            senha VARCHAR(100) NOT NULL,
                            nome VARCHAR(100)
                        )
                    """;
            stmt.executeUpdate(criarTabelaUsuarios);
            System.out.println("Tabela 'usuarios' criada com sucesso!");

            // Cria a tabela de histórico
            String criarTabelaHistorico = """
                        CREATE TABLE IF NOT EXISTS historico (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                            valor DECIMAL(10,2) NOT NULL,
                            classificacao VARCHAR(70),
                            calculadora ENUM('agua', 'energia') NOT NULL,
                            numero_pessoas INT,
                            id_usuario INT,
                            FOREIGN KEY (id_usuario) REFERENCES usuarios(id) ON DELETE CASCADE
                        )
                    """;
            stmt.executeUpdate(criarTabelaHistorico);
            System.out.println("Tabela 'historico' criada com sucesso!");

        } catch (SQLException e) {
            e.printStackTrace();
            System.err.println("Erro ao criar banco de dados ou tabelas.");
        }
    }

    public static void main(String[] args) {
        criarBancoEDatabase();
    }
}