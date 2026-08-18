# Student App — DevOps & Kubernetes Deployment

A containerized **Node.js + Express Student Application** deployed using modern DevOps and Kubernetes practices.

The project demonstrates the complete journey of a web application from source code to containerization, CI/CD automation, Kubernetes deployment, and Helm-based application management.

---

## 🚀 Project Overview

**Student App** is a lightweight Node.js/Express application created to practice and demonstrate real-world DevOps workflows.

The project focuses on:

* Application containerization with Docker
* Source code management with Git/GitHub
* CI/CD automation with GitHub Actions
* Kubernetes deployment
* Kubernetes Services
* Helm-based deployment and release management
* Reproducible application deployment

---

## 🏗️ Architecture

```text
                    ┌──────────────────────┐
                    │      Developer       │
                    │   Code / Git Push    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │       GitHub         │
                    │    Source Control    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    GitHub Actions    │
                    │      CI Pipeline     │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │        Docker        │
                    │   Container Image     │
                    └──────────┬───────────┘
                               │
                               ▼
              ┌─────────────────────────────────┐
              │          Kubernetes             │
              │                                 │
              │   ┌─────────────────────────┐   │
              │   │      Deployment         │   │
              │   │                         │   │
              │   │   ┌─────┐   ┌─────┐     │   │
              │   │   │ Pod │   │ Pod │     │   │
              │   │   └─────┘   └─────┘     │   │
              │   └────────────┬────────────┘   │
              │                │                │
              │                ▼                │
              │        ┌──────────────┐        │
              │        │   Service    │        │
              │        └──────────────┘        │
              └─────────────────────────────────┘
                               │
                               ▼
                         Student App
```

---

## 🛠️ Technology Stack

| Category                | Technology        |
| ----------------------- | ----------------- |
| Application             | Node.js           |
| Framework               | Express.js        |
| Source Control          | Git               |
| Repository              | GitHub            |
| CI/CD                   | GitHub Actions    |
| Containerization        | Docker            |
| Container Orchestration | Kubernetes        |
| Package Manager         | npm               |
| Kubernetes Packaging    | Helm              |
| Configuration           | YAML              |
| Local Kubernetes        | Kind / Kubernetes |
| Application Server      | Express           |

---

## 📁 Project Structure

```text
student-app/
│
├── .github/
│   └── workflows/
│       └── GitHub Actions workflows
│
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
│
├── student-app-chart/
│   ├── charts/
│   ├── templates/
│   ├── Chart.yaml
│   └── values.yaml
│
├── app.js
├── Dockerfile
├── .dockerignore
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

# 🧑‍💻 Application

The application is built using **Node.js and Express.js**.

The project uses Express as its web framework and keeps the application intentionally lightweight so the main focus remains on DevOps and deployment practices.

### Application Dependency

```json
"dependencies": {
  "express": "^5.2.1"
}
```

---

# 🐳 Docker

The application is containerized using Docker.

## Build Docker Image

```bash
docker build -t student-app:v1 .
```

## Run Container

```bash
docker run -d -p 3000:3000 --name student-app student-app:v1
```

## Check Running Container

```bash
docker ps
```

## View Logs

```bash
docker logs student-app
```

## Stop Container

```bash
docker stop student-app
```

---

# 🔄 CI/CD with GitHub Actions

The project contains a GitHub Actions workflow under:

```text
.github/workflows/
```

The CI workflow is designed to automate application-related checks whenever changes are pushed to the repository.

### CI/CD Flow

```text
Git Push
   │
   ▼
GitHub Repository
   │
   ▼
GitHub Actions
   │
   ├── Checkout Source
   │
   ├── Setup Node.js
   │
   ├── Install Dependencies
   │
   └── Application Checks
   │
   ▼
Pipeline Result
```

---

# ☸️ Kubernetes

The application can be deployed to Kubernetes using the manifests stored inside:

```text
k8s/
```

The Kubernetes configuration separates application deployment from service exposure.

## Kubernetes Resources

* Deployment
* Pod
* Service

---

## Deploy to Kubernetes

First verify the cluster:

```bash
kubectl get nodes
```

Apply the Kubernetes manifests:

```bash
kubectl apply -f k8s/
```

Check deployments:

```bash
kubectl get deployments
```

Check pods:

```bash
kubectl get pods
```

Check services:

```bash
kubectl get services
```

---

## Check Application Logs

```bash
kubectl logs <pod-name>
```

For real-time logs:

```bash
kubectl logs -f <pod-name>
```

---

## Kubernetes Troubleshooting

Check pod details:

```bash
kubectl describe pod <pod-name>
```

Check cluster events:

```bash
kubectl get events --sort-by=.lastTimestamp
```

Check deployment status:

```bash
kubectl rollout status deployment/<deployment-name>
```

---

# ⎈ Helm

The project also contains a Helm chart:

```text
student-app-chart/
```

Helm is used to package and manage the Kubernetes application.

## Helm Chart Structure

```text
student-app-chart/
│
├── Chart.yaml
├── values.yaml
├── charts/
└── templates/
    ├── deployment.yaml
    ├── service.yaml
    └── ...
```

---

## Validate Helm Chart

```bash
helm lint student-app-chart/
```

## Install Application

```bash
helm install student-app student-app-chart/
```

## Check Helm Release

```bash
helm list
```

## Check Release Status

```bash
helm status student-app
```

## Upgrade Application

```bash
helm upgrade student-app student-app-chart/
```

## Rollback

```bash
helm rollback student-app <REVISION>
```

## Uninstall

```bash
helm uninstall student-app
```

---

# 🔁 Deployment Workflow

The overall DevOps workflow is:

```text
Developer
    │
    ▼
Git
    │
    ▼
GitHub
    │
    ▼
GitHub Actions
    │
    ▼
Build / Validate
    │
    ▼
Docker Image
    │
    ▼
Kubernetes
    │
    ▼
Deployment
    │
    ▼
Service
    │
    ▼
Student Application
```

Helm can be used as the deployment/package management layer for Kubernetes.

---

# 🔍 Useful Kubernetes Commands

### View all resources

```bash
kubectl get all
```

### View pods

```bash
kubectl get pods -o wide
```

### Watch pods

```bash
kubectl get pods -w
```

### Describe deployment

```bash
kubectl describe deployment <deployment-name>
```

### Restart deployment

```bash
kubectl rollout restart deployment/<deployment-name>
```

### View rollout history

```bash
kubectl rollout history deployment/<deployment-name>
```

### Roll back deployment

```bash
kubectl rollout undo deployment/<deployment-name>
```

---

# 🧪 Local Development

## Clone Repository

```bash
git clone https://github.com/pandeypushkar809-collab/student-app.git
cd student-app
```

## Install Dependencies

```bash
npm install
```

## Start Application

```bash
node app.js
```

The application can then be accessed through the configured application port.

---

# 📊 Project Capabilities

| Capability              | Status        |
| ----------------------- | ------------- |
| Node.js Application     | ✅             |
| Express.js              | ✅             |
| Git/GitHub              | ✅             |
| Dockerfile              | ✅             |
| Docker Containerization | ✅             |
| Kubernetes Manifests    | ✅             |
| Kubernetes Deployment   | ✅             |
| Kubernetes Service      | ✅             |
| Helm Chart              | ✅             |
| GitHub Actions          | ✅             |
| Automated Testing       | 🔄 Extendable |
| Container Registry      | 🔄 Extendable |
| Security Scanning       | 🔄 Extendable |
| SonarQube               | 🔄 Extendable |
| Trivy                   | 🔄 Extendable |
| GitOps / Argo CD        | 🔄 Extendable |
| Prometheus              | 🔄 Extendable |
| Grafana                 | 🔄 Extendable |

---

# 🔐 Future DevSecOps Improvements

The project can be extended into a complete DevSecOps pipeline by adding:

```text
GitHub
   │
   ▼
GitHub Actions
   │
   ├── Unit Tests
   │
   ├── SAST
   │
   ├── Dependency Scanning
   │
   ├── Secret Scanning
   │
   ├── SonarQube
   │
   ├── Trivy
   │
   ▼
Docker Image
   │
   ▼
Container Registry
   │
   ▼
Kubernetes
   │
   ▼
Helm
   │
   ▼
Argo CD
   │
   ▼
Monitoring
   ├── Prometheus
   └── Grafana
```

---

# 🎯 Learning Objectives

This project demonstrates practical understanding of:

* Git and GitHub
* Linux-based application workflows
* Node.js application deployment
* Docker containerization
* Kubernetes fundamentals
* Kubernetes Deployments and Services
* YAML-based infrastructure configuration
* Helm charts
* CI/CD concepts
* Application troubleshooting
* Container and Kubernetes operations

---

# 💼 Resume Value

This project is suitable as a **supporting DevOps/Kubernetes project** on a resume.

### Resume Description

> **Student App — DevOps & Kubernetes Deployment**
> Containerized a Node.js/Express application using Docker and deployed it on Kubernetes using Deployments and Services. Implemented GitHub Actions for CI automation and packaged Kubernetes resources using Helm, demonstrating practical experience with containerization, orchestration, CI/CD, and Kubernetes application lifecycle management.

---

# 📌 Project Status

**Current Status:** Active DevOps/Kubernetes practice project

The project is being progressively enhanced toward a more production-oriented DevSecOps workflow.

---

# 👨‍💻 Author

**Pushkar Pandey**

DevOps & Cloud Engineering Learner

GitHub:
https://github.com/pandeypushkar809-collab

---

## ⭐ If you find this project useful

Consider giving the repository a star and exploring the implementation.

**Repository:**
https://github.com/pandeypushkar809-collab/student-app

<img width="1347" height="593" alt="Screenshot 2026-07-20 181658" src="https://github.com/user-attachments/assets/4c3d2d64-4342-4948-9b03-9e7f3a58f9a3" />
<img width="1356" height="623" alt="Screenshot 2026-07-20 182344" src="https://github.com/user-attachments/assets/bd11191c-f1b4-4b5d-a2ea-35c72f666538" />
