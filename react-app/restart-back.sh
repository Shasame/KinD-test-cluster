#!/bin/sh

kubectl delete deployment avp-back-deployment -n react-app
kind load docker-image avp-back:latest -n mykube
kubectl apply -f sampleApp-deployment.yml