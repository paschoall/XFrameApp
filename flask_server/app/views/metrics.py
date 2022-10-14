from flask import request, jsonify

from app import db
from ..models.models import metrica, metric_schema, metrics_schema

# Metrics CRUD
# Create
def post_metric():
    name = request.json['name']
    description = request.json['description']

    metric = metrica(name, description)
    try:
        db.session.add(metric)
        db.session.commit()
        result = metric_schema.dump(metric)
        return jsonify({'messasge': 'successfully registered', 'data': result}), 201
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to register', 'data': {}}), 500


# Read
def get_metrics():
    metrics = metrica.query.all()

    if metrics:
        result = metrics_schema.dump(metrics)
        return jsonify({'message': "successfully fetched", 'data': result})

    return jsonify({'message': "nothing found", 'data': {}})


def get_metric(id):
    metric = metrica.query.get(id)

    if metric:
        result = metric_schema.dump(metric)
        return jsonify({'message': "successfully fetched", 'data': result}), 200

    return jsonify({'message': "metric doesn't exist", 'data': {}}), 404


# Update
def update_metric(id):
    if ("name" in request.json):
        name = request.json['name']
    if ("description" in request.json):
        description = request.json['description']

    metric = metrica.query.get(id)

    if not metric:
        return jsonify({'message': "metric doesn't exist", 'data': {}}), 404

    try:
        metric.name = name
        metric.description = description
        db.session.commit()
        result = metric_schema.dump(metric)
        return jsonify({'messasge': 'successfully updated', 'data': result}), 200
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to update', 'data': {}}), 500


# Delete
def delete_metric(id):
    metric = metrica.query.get(id)

    if not metric:
        return jsonify({'message': "metric doesn't exist", 'data': {}}), 404

    if metric:
        try:
            db.session.delete(metric)
            db.session.commit()
            result = metric_schema.dump(metric)
            return jsonify({'message': "successfully deleted", 'data': result}), 200
        except Exception as e:
            print(e)
            return jsonify({'message': "unable to delete", 'data': {}}), 500
