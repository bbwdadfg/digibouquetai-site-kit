FROM alpine:3.22

LABEL org.opencontainers.image.title="digibouquetai-site-kit"
LABEL org.opencontainers.image.description="Canonical URL helpers for DigiBouquet AI digital bouquets and AI gift cards."
LABEL org.opencontainers.image.url="https://digibouquetai.com"
LABEL org.opencontainers.image.source="https://github.com/bbwdadfg/digibouquetai-site-kit"
LABEL org.opencontainers.image.licenses="MIT"

COPY docker/digibouquetai-site-kit /usr/local/bin/digibouquetai-site-kit
RUN chmod +x /usr/local/bin/digibouquetai-site-kit

ENTRYPOINT ["digibouquetai-site-kit"]
CMD ["home"]
