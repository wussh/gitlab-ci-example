FROM golang:1.23.1 AS builder

WORKDIR /app

COPY go.* ./

RUN go mod download

COPY *.go ./

RUN CGO_ENABLED=0 GOOS=linux go build -o hello_go_http

FROM scratch

COPY --from=builder /app/hello_go_http /hello_go_http

EXPOSE 8080

ENTRYPOINT ["/hello_go_http"]
