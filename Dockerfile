FROM python
COPY . /app-ngg
WORKDIR /app-ngg
CMD ["python3", "app-ngg.py"]
