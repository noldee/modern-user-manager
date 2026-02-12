# Etapa 1: Construcción (Maven)
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app

# Copiar el POM y descargar dependencias
COPY pom.xml .
RUN mvn dependency:go-offline

# Copiar el código fuente y compilar
COPY src ./src
RUN mvn clean package -DskipTests

# Etapa 2: Imagen de ejecución (JRE)
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Copiar el JAR desde la etapa de construcción
COPY --from=build /app/target/demo-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]