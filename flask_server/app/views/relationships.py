from flask import request, jsonify

from app import db
from ..models.models import referencia_metrica, metric_reference_schema, metric_references_schema
from ..models.models import referencia_instrumento, instrument_reference_schema, instrument_references_schema
from ..models.models import referencia_fator, factor_reference_schema, factor_references_schema
from ..models.models import referencia_tratamento, treatment_reference_schema, treatment_references_schema
from ..models.models import referencia_vi, vi_reference_schema, vi_references_schema
from ..models.models import referencia_vd, vd_reference_schema, vd_references_schema
from ..models.models import design_vi_vd, vi_vd_schema, vi_vds_schema
from ..models.models import metric_instrument, metric_instrument_schema, metric_instruments_schema
from ..models.models import factors_treatments, factor_treatment_schema, factor_treatments_schema
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
# def update_metric_reference(id):
#     if ("id_metric" in request.json):
#         id_metric = request.json['id_metric']
#     if ("id_ref" in request.json):
#         id_ref = request.json['id_ref']

#     metric_reference = referencia_metrica.query.get(id)

#     if not metric_reference:
#         return jsonify({'message': "metric reference doesn't exist", 'data': {}}), 404

#     try:
#         metric_reference.id_metric = id_metric
#         metric_reference.id_ref = id_ref
#         db.session.commit()
#         result = metric_reference_schema.dump(metric_reference)
#         return jsonify({'messasge': 'successfully updated', 'data': result}), 200
#     except Exception as e:
#         # print(e)
#         return jsonify({'message': 'unable to update', 'data': {}}), 500

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


# Instrument References CRUD
# Create
def post_instrument_reference():
    id_instrument = request.json['id_instrument']
    id_ref = request.json['id_ref']

    instrument_reference = referencia_instrumento(id_instrument, id_ref)
    try:
        db.session.add(instrument_reference)
        db.session.commit()
        result = instrument_reference_schema.dump(instrument_reference)
        return jsonify({'messasge': 'successfully registered', 'data': result}), 201
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to register', 'data': {}}), 500

# Read
def get_instrument_references():
    instrument_references = referencia_instrumento.query.all()

    if instrument_references:
        result = instrument_references_schema.dump(instrument_references)
        return jsonify({'message': "successfully fetched", 'data': result})

    return jsonify({'message': "nothing found", 'data': {}})


def get_instrument_reference(id):
    instrument_reference = referencia_instrumento.query.get(id)

    if instrument_reference:
        result = instrument_reference_schema.dump(instrument_reference)
        return jsonify({'message': "successfully fetched", 'data': result}), 200

    return jsonify({'message': "instrument reference doesn't exist", 'data': {}}), 404

# # Update
# def update_instrument_reference(id):
#     if ("id_instrument" in request.json):
#         id_instrument = request.json['id_instrument']
#     if ("id_ref" in request.json):
#         id_ref = request.json['id_ref']

#     instrument_reference = referencia_instrumento.query.get(id)

#     if not instrument_reference:
#         return jsonify({'message': "instrument reference doesn't exist", 'data': {}}), 404

#     try:
#         instrument_reference.id_instrument = id_instrument
#         instrument_reference.id_ref = id_ref
#         db.session.commit()
#         result = instrument_reference_schema.dump(instrument_reference)
#         return jsonify({'messasge': 'successfully updated', 'data': result}), 200
#     except Exception as e:
#         # print(e)
#         return jsonify({'message': 'unable to update', 'data': {}}), 500

# Delete
def delete_instrument_reference(id):
    instrument_reference = referencia_instrumento.query.get(id)

    if not instrument_reference:
        return jsonify({'message': "instrument reference doesn't exist", 'data': {}}), 404

    if instrument_reference:
        try:
            db.session.delete(instrument_reference)
            db.session.commit()
            result = instrument_reference_schema.dump(instrument_reference)
            return jsonify({'message': "successfully deleted", 'data': result}), 200
        except Exception as e:
            print(e)
            return jsonify({'message': "unable to delete", 'data': {}}), 500

            
# Factor References CRUD
# Create
def post_factor_reference():
    id_factor = request.json['id_factor']
    id_ref = request.json['id_ref']

    factor_reference = referencia_fator(id_factor, id_ref)
    try:
        db.session.add(factor_reference)
        db.session.commit()
        result = factor_reference_schema.dump(factor_reference)
        return jsonify({'messasge': 'successfully registered', 'data': result}), 201
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to register', 'data': {}}), 500

# Read
def get_factor_references():
    factor_references = referencia_fator.query.all()

    if factor_references:
        result = factor_references_schema.dump(factor_references)
        return jsonify({'message': "successfully fetched", 'data': result})

    return jsonify({'message': "nothing found", 'data': {}})


def get_factor_reference(id):
    factor_reference = referencia_fator.query.get(id)

    if factor_reference:
        result = factor_reference_schema.dump(factor_reference)
        return jsonify({'message': "successfully fetched", 'data': result}), 200

    return jsonify({'message': "factor reference doesn't exist", 'data': {}}), 404

# # Update
# def update_factor_reference(id):
#     if ("id_factor" in request.json):
#         id_factor = request.json['id_factor']
#     if ("id_ref" in request.json):
#         id_ref = request.json['id_ref']

#     factor_reference = referencia_fator.query.get(id)

#     if not factor_reference:
#         return jsonify({'message': "factor reference doesn't exist", 'data': {}}), 404

#     try:
#         factor_reference.id_factor = id_factor
#         factor_reference.id_ref = id_ref
#         db.session.commit()
#         result = factor_reference_schema.dump(factor_reference)
#         return jsonify({'messasge': 'successfully updated', 'data': result}), 200
#     except Exception as e:
#         # print(e)
#         return jsonify({'message': 'unable to update', 'data': {}}), 500

# Delete
def delete_factor_reference(id):
    factor_reference = referencia_fator.query.get(id)

    if not factor_reference:
        return jsonify({'message': "factor reference doesn't exist", 'data': {}}), 404

    if factor_reference:
        try:
            db.session.delete(factor_reference)
            db.session.commit()
            result = factor_reference_schema.dump(factor_reference)
            return jsonify({'message': "successfully deleted", 'data': result}), 200
        except Exception as e:
            print(e)
            return jsonify({'message': "unable to delete", 'data': {}}), 500


# Treatment References CRUD
# Create
def post_treatment_reference():
    id_treatment = request.json['id_treatment']
    id_ref = request.json['id_ref']

    treatment_reference = referencia_tratamento(id_treatment, id_ref)
    try:
        db.session.add(treatment_reference)
        db.session.commit()
        result = treatment_reference_schema.dump(treatment_reference)
        return jsonify({'messasge': 'successfully registered', 'data': result}), 201
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to register', 'data': {}}), 500

# Read
def get_treatment_references():
    treatment_references = referencia_tratamento.query.all()

    if treatment_references:
        result = treatment_references_schema.dump(treatment_references)
        return jsonify({'message': "successfully fetched", 'data': result})

    return jsonify({'message': "nothing found", 'data': {}})


def get_treatment_reference(id):
    treatment_reference = referencia_tratamento.query.get(id)

    if treatment_reference:
        result = treatment_reference_schema.dump(treatment_reference)
        return jsonify({'message': "successfully fetched", 'data': result}), 200

    return jsonify({'message': "treatment reference doesn't exist", 'data': {}}), 404

# # Update
# def update_treatment_reference(id):
#     if ("id_treatment" in request.json):
#         id_treatment = request.json['id_treatment']
#     if ("id_ref" in request.json):
#         id_ref = request.json['id_ref']

#     treatment_reference = referencia_tratamento.query.get(id)

#     if not treatment_reference:
#         return jsonify({'message': "treatment reference doesn't exist", 'data': {}}), 404

#     try:
#         treatment_reference.id_treatment = id_treatment
#         treatment_reference.id_ref = id_ref
#         db.session.commit()
#         result = treatment_reference_schema.dump(treatment_reference)
#         return jsonify({'messasge': 'successfully updated', 'data': result}), 200
#     except Exception as e:
#         # print(e)
#         return jsonify({'message': 'unable to update', 'data': {}}), 500

# Delete
def delete_treatment_reference(id):
    treatment_reference = referencia_tratamento.query.get(id)

    if not treatment_reference:
        return jsonify({'message': "treatment reference doesn't exist", 'data': {}}), 404

    if treatment_reference:
        try:
            db.session.delete(treatment_reference)
            db.session.commit()
            result = treatment_reference_schema.dump(treatment_reference)
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

# # Update
# def update_vi_reference(id):
#     if ("name" in request.json):
#         name = request.json['name']
#     if ("description" in request.json):
#         description = request.json['description']

#     vi_reference = referencia_vi.query.get(id)

#     if not vi_reference:
#         return jsonify({'message': "variable reference doesn't exist", 'data': {}}), 404

#     try:
#         vi_reference.name = name
#         vi_reference.description = description
#         # db.session.add(user)
#         db.session.commit()
#         result = vi_reference_schema.dump(vi_reference)
#         return jsonify({'messasge': 'successfully updated', 'data': result}), 200
#     except Exception as e:
#         # print(e)
#         return jsonify({'message': 'unable to update', 'data': {}}), 500

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

# # Update
# def update_vd_reference(id):
#     if ("name" in request.json):
#         name = request.json['name']
#     if ("description" in request.json):
#         description = request.json['description']

#     vd_reference = referencia_vd.query.get(id)

#     if not vd_reference:
#         return jsonify({'message': "variable reference doesn't exist", 'data': {}}), 404

#     try:
#         vd_reference.name = name
#         vd_reference.description = description
#         # db.session.add(user)
#         db.session.commit()
#         result = vd_reference_schema.dump(vd_reference)
#         return jsonify({'messasge': 'successfully updated', 'data': result}), 200
#     except Exception as e:
#         # print(e)
#         return jsonify({'message': 'unable to update', 'data': {}}), 500

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
    id_vd_array = request.json['id_vd_array']

    vi_vd_relationship = design_vi_vd(id_vi, id_vd_array)
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
    vi_vd_relationships = design_vi_vd.query.all()

    if vi_vd_relationships:
        result = vi_vds_schema.dump(vi_vd_relationships)
        return jsonify({'message': "successfully fetched", 'data': result})

    return jsonify({'message': "nothing found", 'data': {}})

def get_vi_vd_relationship(id):
    vi_vd_relationship = design_vi_vd.query.get(id)

    if vi_vd_relationship:
        result = vi_vd_schema.dump(vi_vd_relationship)
        return jsonify({'message': "successfully fetched", 'data': result}), 200

    return jsonify({'message': "relationship doesn't exist", 'data': {}}), 404

# # Update
# def update_vi_vd_relationship(id):
#     if ("name" in request.json):
#         name = request.json['name']
#     if ("description" in request.json):
#         description = request.json['description']

#     vi_vd_relationship = design_vi_vd.query.get(id)

#     if not vi_vd_relationship:
#         return jsonify({'message': "relationship doesn't exist", 'data': {}}), 404

#     try:
#         vi_vd_relationship.name = name
#         vi_vd_relationship.description = description
#         # db.session.add(user)
#         db.session.commit()
#         result = vi_vd_schema.dump(vi_vd_relationship)
#         return jsonify({'messasge': 'successfully updated', 'data': result}), 200
#     except Exception as e:
#         # print(e)
#         return jsonify({'message': 'unable to update', 'data': {}}), 500

# Delete
def delete_vi_vd_relationship(id):
    vi_vd_relationship = design_vi_vd.query.get(id)

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


#Metric - Instrument Relationship CRUD
# Create
def post_metric_instrument_relationship():
    id_vd = request.json['id_vd']
    id_metric = request.json['id_metric']
    id_instrument = request.json['id_instrument']

    metric_instrument_relationship = metric_instrument(id_vd, id_metric, id_instrument)
    try:
        db.session.add(metric_instrument_relationship)
        db.session.commit()
        result = metric_instrument_schema.dump(metric_instrument_relationship)
        return jsonify({'messasge': 'successfully registered', 'data': result}), 201
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to register', 'data': {}}), 500

# Read
def get_metric_instrument_relationships():
    metric_instrument_relationships = metric_instrument.query.all()

    if metric_instrument_relationships:
        result = metric_instruments_schema.dump(metric_instrument_relationships)
        return jsonify({'message': "successfully fetched", 'data': result})

    return jsonify({'message': "nothing found", 'data': {}})

def get_metric_instrument_relationship(id):
    metric_instrument_relationship = metric_instrument.query.get(id)

    if metric_instrument_relationship:
        result = metric_instrument_schema.dump(metric_instrument_relationship)
        return jsonify({'message': "successfully fetched", 'data': result}), 200

    return jsonify({'message': "relationship doesn't exist", 'data': {}}), 404

# # Update
# def update_metric_instrument_relationship(id):
#     if ("name" in request.json):
#         name = request.json['name']
#     if ("description" in request.json):
#         description = request.json['description']

#     metric_instrument_relationship = metric_instrument.query.get(id)

#     if not metric_instrument_relationship:
#         return jsonify({'message': "relationship doesn't exist", 'data': {}}), 404

#     try:
#         metric_instrument_relationship.name = name
#         metric_instrument_relationship.description = description
#         # db.session.add(user)
#         db.session.commit()
#         result = metric_instrument_schema.dump(metric_instrument_relationship)
#         return jsonify({'messasge': 'successfully updated', 'data': result}), 200
#     except Exception as e:
#         # print(e)
#         return jsonify({'message': 'unable to update', 'data': {}}), 500

# Delete
def delete_metric_instrument_relationship(id):
    metric_instrument_relationship = metric_instrument.query.get(id)

    if not metric_instrument_relationship:
        return jsonify({'message': "relationship doesn't exist", 'data': {}}), 404

    if metric_instrument_relationship:
        try:
            db.session.delete(metric_instrument_relationship)
            db.session.commit()
            result = metric_instrument_schema.dump(metric_instrument_relationship)
            return jsonify({'message': "successfully deleted", 'data': result}), 200
        except Exception as e:
            print(e)
            return jsonify({'message': "unable to delete", 'data': {}}), 500


#Factors - Treatments Relationship CRUD
# Create
def post_factors_treatments_relationship():
    id_vi = request.json['id_vi']
    id_factors_array = request.json['id_factors_array']
    id_treatments_array = request.json['id_treatments_array']

    factors_treatments_relationship = factors_treatments(id_vi, id_factors_array, id_treatments_array)
    try:
        db.session.add(factors_treatments_relationship)
        db.session.commit()
        result = factor_treatment_schema.dump(factors_treatments_relationship)
        return jsonify({'messasge': 'successfully registered', 'data': result}), 201
    except Exception as e:
        # print(e)
        return jsonify({'message': 'unable to register', 'data': {}}), 500

# Read
def get_factors_treatments_relationships():
    factors_treatments_relationships = factors_treatments.query.all()

    if factors_treatments_relationships:
        result = factor_treatments_schema.dump(factors_treatments_relationships)
        return jsonify({'message': "successfully fetched", 'data': result})

    return jsonify({'message': "nothing found", 'data': {}})

def get_factors_treatments_relationship(id):
    factors_treatments_relationship = factors_treatments.query.get(id)

    if factors_treatments_relationship:
        result = factor_treatment_schema.dump(factors_treatments_relationship)
        return jsonify({'message': "successfully fetched", 'data': result}), 200

    return jsonify({'message': "relationship doesn't exist", 'data': {}}), 404

# # Update
# def update_factors_treatments_relationship(id):
#     if ("name" in request.json):
#         name = request.json['name']
#     if ("description" in request.json):
#         description = request.json['description']

#     factors_treatments_relationship = factors_treatments.query.get(id)

#     if not factors_treatments_relationship:
#         return jsonify({'message': "relationship doesn't exist", 'data': {}}), 404

#     try:
#         factors_treatments_relationship.name = name
#         factors_treatments_relationship.description = description
#         # db.session.add(user)
#         db.session.commit()
#         result = factor_treatment_schema.dump(factors_treatments_relationship)
#         return jsonify({'messasge': 'successfully updated', 'data': result}), 200
#     except Exception as e:
#         # print(e)
#         return jsonify({'message': 'unable to update', 'data': {}}), 500

# Delete
def delete_factors_treatments_relationship(id):
    factors_treatments_relationship = factors_treatments.query.get(id)

    if not factors_treatments_relationship:
        return jsonify({'message': "relationship doesn't exist", 'data': {}}), 404

    if factors_treatments_relationship:
        try:
            db.session.delete(factors_treatments_relationship)
            db.session.commit()
            result = factor_treatment_schema.dump(factors_treatments_relationship)
            return jsonify({'message': "successfully deleted", 'data': result}), 200
        except Exception as e:
            print(e)
            return jsonify({'message': "unable to delete", 'data': {}}), 500