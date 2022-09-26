from flask import request, jsonify

from app import db
from ..models.models import referencia_metrica, metric_reference_schema, metric_references_schema
from ..models.models import referencia_vi, vi_reference_schema, vi_references_schema
from ..models.models import referencia_vd, vd_reference_schema, vd_references_schema
from ..models.models import vi_vd, vi_vd_schema, vi_vds_schema
from flask import request, jsonify

# Metric References CRUD
# Create
def post_metric_reference():
    id_metric = request.json['id_metric']
    id_ref = request.json['id_ref']

    metric_reference = referencia_metrica(id_metric, id_ref)
    try:
        db.session.add(metric_reference)
        db.session.commit()
        result = metric_reference_schema.dump(metric_reference)
        return jsonify({'messasge': 'successfully registered', 'data': result}), 201
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to register', 'data': {}}), 500

# Read
def get_metric_references():
    metric_references = referencia_metrica.query.all()

    if metric_references:
        result = metric_references_schema.dump(metric_references)
        return jsonify({'message': "successfully fetched", 'data': result})

    return jsonify({'message': "nothing found", 'data': {}})


def get_metric_reference(id):
    metric_reference = referencia_metrica.query.get(id)

    if metric_reference:
        result = metric_reference_schema.dump(metric_reference)
        return jsonify({'message': "successfully fetched", 'data': result}), 200

    return jsonify({'message': "metric reference doesn't exist", 'data': {}}), 404

# Update
def update_metric_reference(id):
    if ("id_metric" in request.json):
        id_metric = request.json['id_metric']
    if ("id_ref" in request.json):
        id_ref = request.json['id_ref']

    metric_reference = referencia_metrica.query.get(id)

    if not metric_reference:
        return jsonify({'message': "metric reference doesn't exist", 'data': {}}), 404

    try:
        metric_reference.id_metric = id_metric
        metric_reference.id_ref = id_ref
        db.session.commit()
        result = metric_reference_schema.dump(metric_reference)
        return jsonify({'messasge': 'successfully updated', 'data': result}), 200
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to update', 'data': {}}), 500

# Delete
def delete_metric_reference(id):
    metric_reference = referencia_metrica.query.get(id)

    if not metric_reference:
        return jsonify({'message': "metric reference doesn't exist", 'data': {}}), 404

    if metric_reference:
        try:
            db.session.delete(metric_reference)
            db.session.commit()
            result = metric_reference_schema.dump(metric_reference)
            return jsonify({'message': "successfully deleted", 'data': result}), 200
        except Exception as e:
            print(e)
            return jsonify({'message': "unable to delete", 'data': {}}), 500


# Independent Variable References CRUD
# Create
def post_vi_reference():
    id_vi = request.json['id_vi']
    id_ref = request.json['id_ref']

    vi_reference = referencia_vi(id_vi, id_ref)
    try:
        db.session.add(vi_reference)
        db.session.commit()
        result = vi_reference_schema.dump(vi_reference)
        return jsonify({'messasge': 'successfully registered', 'data': result}), 201
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to register', 'data': {}}), 500

# Read
def get_vi_references():
    vi_references = referencia_vi.query.all()

    if vi_references:
        result = vi_references_schema.dump(vi_references)
        return jsonify({'message': "successfully fetched", 'data': result})

    return jsonify({'message': "nothing found", 'data': {}})

def get_vi_reference(id):
    vi_reference = referencia_vi.query.get(id)

    if vi_reference:
        result = vi_reference_schema.dump(vi_reference)
        return jsonify({'message': "successfully fetched", 'data': result}), 200

    return jsonify({'message': "variable reference doesn't exist", 'data': {}}), 404

# Update
def update_vi_reference(id):
    if ("name" in request.json):
        name = request.json['name']
    if ("description" in request.json):
        description = request.json['description']

    vi_reference = referencia_vi.query.get(id)

    if not vi_reference:
        return jsonify({'message': "variable reference doesn't exist", 'data': {}}), 404

    try:
        vi_reference.name = name
        vi_reference.description = description
        # db.session.add(user)
        db.session.commit()
        result = vi_reference_schema.dump(vi_reference)
        return jsonify({'messasge': 'successfully updated', 'data': result}), 200
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to update', 'data': {}}), 500

# Delete
def delete_vi_reference(id):
    vi_reference = referencia_vi.query.get(id)

    if not vi_reference:
        return jsonify({'message': "variable reference doesn't exist", 'data': {}}), 404

    if vi_reference:
        try:
            db.session.delete(vi_reference)
            db.session.commit()
            result = vi_reference_schema.dump(vi_reference)
            return jsonify({'message': "successfully deleted", 'data': result}), 200
        except Exception as e:
            print(e)
            return jsonify({'message': "unable to delete", 'data': {}}), 500


# Dependent Variable References CRUD
# Create
def post_vd_reference():
    id_vd = request.json['id_vd']
    id_ref = request.json['id_ref']

    vd_reference = referencia_vd(id_vd, id_ref)
    try:
        db.session.add(vd_reference)
        db.session.commit()
        result = vd_reference_schema.dump(vd_reference)
        return jsonify({'messasge': 'successfully registered', 'data': result}), 201
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to register', 'data': {}}), 500

# Read
def get_vd_references():
    vd_references = referencia_vd.query.all()

    if vd_references:
        result = vd_references_schema.dump(vd_references)
        return jsonify({'message': "successfully fetched", 'data': result})

    return jsonify({'message': "nothing found", 'data': {}})

def get_vd_reference(id):
    vd_reference = referencia_vd.query.get(id)

    if vd_reference:
        result = vd_reference_schema.dump(vd_reference)
        return jsonify({'message': "successfully fetched", 'data': result}), 200

    return jsonify({'message': "variable reference doesn't exist", 'data': {}}), 404

# Update
def update_vd_reference(id):
    if ("name" in request.json):
        name = request.json['name']
    if ("description" in request.json):
        description = request.json['description']

    vd_reference = referencia_vd.query.get(id)

    if not vd_reference:
        return jsonify({'message': "variable reference doesn't exist", 'data': {}}), 404

    try:
        vd_reference.name = name
        vd_reference.description = description
        # db.session.add(user)
        db.session.commit()
        result = vd_reference_schema.dump(vd_reference)
        return jsonify({'messasge': 'successfully updated', 'data': result}), 200
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to update', 'data': {}}), 500

# Delete
def delete_vd_reference(id):
    vd_reference = referencia_vd.query.get(id)

    if not vd_reference:
        return jsonify({'message': "variable reference doesn't exist", 'data': {}}), 404

    if vd_reference:
        try:
            db.session.delete(vd_reference)
            db.session.commit()
            result = vd_reference_schema.dump(vd_reference)
            return jsonify({'message': "successfully deleted", 'data': result}), 200
        except Exception as e:
            print(e)
            return jsonify({'message': "unable to delete", 'data': {}}), 500


#Independent Variable - Dependent Variable Relationship CRUD
# Create
def post_vi_vd_relationship():
    id_vi = request.json['id_vi']
    id_vd = request.json['id_vd']

    vi_vd_relationship = vi_vd(id_vi, id_vd)
    try:
        db.session.add(vi_vd_relationship)
        db.session.commit()
        result = vi_vd_schema.dump(vi_vd_relationship)
        return jsonify({'messasge': 'successfully registered', 'data': result}), 201
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to register', 'data': {}}), 500

# Read
def get_vi_vd_relationships():
    vi_vd_relationships = vi_vd.query.all()

    if vi_vd_relationships:
        result = vi_vds_schema.dump(vi_vd_relationships)
        return jsonify({'message': "successfully fetched", 'data': result})

    return jsonify({'message': "nothing found", 'data': {}})

def get_vi_vd_relationship(id):
    vi_vd_relationship = vi_vd.query.get(id)

    if vi_vd_relationship:
        result = vi_vd_schema.dump(vi_vd_relationship)
        return jsonify({'message': "successfully fetched", 'data': result}), 200

    return jsonify({'message': "relationship doesn't exist", 'data': {}}), 404

# Update
def update_vi_vd_relationship(id):
    if ("name" in request.json):
        name = request.json['name']
    if ("description" in request.json):
        description = request.json['description']

    vi_vd_relationship = vi_vd.query.get(id)

    if not vi_vd_relationship:
        return jsonify({'message': "relationship doesn't exist", 'data': {}}), 404

    try:
        vi_vd_relationship.name = name
        vi_vd_relationship.description = description
        # db.session.add(user)
        db.session.commit()
        result = vi_vd_schema.dump(vi_vd_relationship)
        return jsonify({'messasge': 'successfully updated', 'data': result}), 200
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to update', 'data': {}}), 500

# Delete
def delete_vi_vd_relationship(id):
    vi_vd_relationship = vi_vd.query.get(id)

    if not vi_vd_relationship:
        return jsonify({'message': "relationship doesn't exist", 'data': {}}), 404

    if vi_vd_relationship:
        try:
            db.session.delete(vi_vd_relationship)
            db.session.commit()
            result = vi_vd_schema.dump(vi_vd_relationship)
            return jsonify({'message': "successfully deleted", 'data': result}), 200
        except Exception as e:
            print(e)
            return jsonify({'message': "unable to delete", 'data': {}}), 500
