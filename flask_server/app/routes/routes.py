import json

from flask import Response, request
from flask import jsonify

from app import app
from ..views import helper, instruments
from ..views import users, variables, metrics, instruments, factors, treatments, references, relationships

# Members API Route
@app.route("/")
@helper.token_required
def root(current_user):
    if current_user.admin:
        return jsonify({"message": f'Hello {current_user.name}, you are an Admin!'})
    else:
        return jsonify({"message": f'Hello {current_user.name}, you are not an Admin!'})

@app.route("/auth", methods=['POST'])
def authenticate():
    return helper.auth()

# Users CRUD
# Create
@app.route("/user", methods=['POST'])
def post_user():
    return users.post_user()
# Read
@app.route("/users", methods=['GET'])
def get_users():
    return users.get_users()
@app.route("/user/<id>", methods=['GET'])
def get_user(id):
    return users.get_user(id)
# Update
@app.route("/user/<id>", methods=['PUT'])
def update_user(id):
    return users.update_user(id)
# Delete
@app.route("/user/<id>", methods=['DELETE'])
def delete_user(id):
    return users.delete_user(id)

# Variables CRUD
@app.route("/independent_variable", methods=['POST'])
def post_independent_variable():
    return variables.post_independent_variable()
@app.route("/dependent_variable", methods=['POST'])
def post_dependent_variable():
    return variables.post_dependent_variable()


@app.route("/independent_variables", methods=['GET'])
def get_independent_variables():
    return variables.get_independent_variables()
@app.route("/independent_variable/<id>", methods=['GET'])
def get_independent_variable(id):
    return variables.get_independent_variable(id)

@app.route("/dependent_variables", methods=['GET'])
def get_dependent_variables():
    return variables.get_dependent_variables()
@app.route("/dependent_variable/<id>", methods=['GET'])
def get_dependent_variable(id):
    return variables.get_dependent_variable(id)


@app.route("/independent_variable/<id>", methods=['PUT'])
def update_independent_variable(id):
    return variables.update_independent_variable(id)
@app.route("/dependent_variable/<id>", methods=['PUT'])
def update_dependent_variable(id):
    return variables.update_dependent_variable(id)


@app.route("/independent_variable/<id>", methods=['DELETE'])
def delete_independent_variable(id):
    return variables.delete_independent_variable(id)
@app.route("/dependent_variable/<id>", methods=['DELETE'])
def delete_dependent_variable(id):
    return variables.delete_dependent_variable(id)

# Metrics CRUD
@app.route("/metric", methods=['POST'])
def post_metric():
    return metrics.post_metric()
@app.route("/metrics", methods=['GET'])
def get_metrics():
    return metrics.get_metrics()
@app.route("/metric/<id>", methods=['GET'])
def get_metric(id):
    return metrics.get_metric(id)
@app.route("/metric/<id>", methods=['PUT'])
def update_metric(id):
    return metrics.update_metric(id)
@app.route("/metric/<id>", methods=['DELETE'])
def delete_metric(id):
    return metrics.delete_metric(id)

# instruments CRUD
@app.route("/instrument", methods=['POST'])
def post_instrument():
    return instruments.post_instrument()
@app.route("/instruments", methods=['GET'])
def get_instruments():
    return instruments.get_instruments()
@app.route("/instrument/<id>", methods=['GET'])
def get_instrument(id):
    return instruments.get_instrument(id)
@app.route("/instrument/<id>", methods=['PUT'])
def update_instrument(id):
    return instruments.update_instrument(id)
@app.route("/instrument/<id>", methods=['DELETE'])
def delete_instrument(id):
    return instruments.delete_instrument(id)

# factors CRUD
@app.route("/factor", methods=['POST'])
def post_factor():
    return factors.post_factor()
@app.route("/factors", methods=['GET'])
def get_factors():
    return factors.get_factors()
@app.route("/factor/<id>", methods=['GET'])
def get_factor(id):
    return factors.get_factor(id)
@app.route("/factor/<id>", methods=['PUT'])
def update_factor(id):
    return factors.update_factor(id)
@app.route("/factor/<id>", methods=['DELETE'])
def delete_factor(id):
    return factors.delete_factor(id)
    # treatments CRUD

@app.route("/treatment", methods=['POST'])
def post_treatment():
    return treatments.post_treatment()
@app.route("/treatments", methods=['GET'])
def get_treatments():
    return treatments.get_treatments()
@app.route("/treatment/<id>", methods=['GET'])
def get_treatment(id):
    return treatments.get_treatment(id)
@app.route("/treatment/<id>", methods=['PUT'])
def update_treatment(id):
    return treatments.update_treatment(id)
@app.route("/treatment/<id>", methods=['DELETE'])
def delete_treatment(id):
    return treatments.delete_treatment(id)

# References CRUD
@app.route("/reference", methods=['POST'])
def post_reference():
    return references.post_reference()
@app.route("/references", methods=['GET'])
def get_references():
    return references.get_references()
@app.route("/reference/<id>", methods=['GET'])
def get_reference(id):
    return references.get_reference(id)
@app.route("/reference/<id>", methods=['DELETE'])
def delete_reference(id):
    return references.delete_reference(id)
@app.route("/metric_reference", methods=['POST'])
def post_metric_reference():
    return relationships.post_metric_reference()
@app.route("/metric_references", methods=['GET'])
def get_metric_references():
    return relationships.get_metric_references()
@app.route("/metric_reference/<id>", methods=['GET'])
def get_metric_reference(id):
    return relationships.get_metric_reference(id)
@app.route("/metric_reference/<id>", methods=['DELETE'])
def delete_metric_reference(id):
    return relationships.delete_metric_reference(id)
@app.route("/instrument_reference", methods=['POST'])
def post_instrument_reference():
    return relationships.post_instrument_reference()
@app.route("/instrument_references", methods=['GET'])
def get_instrument_references():
    return relationships.get_instrument_references()
@app.route("/instrument_reference/<id>", methods=['GET'])
def get_instrument_reference(id):
    return relationships.get_instrument_reference(id)
@app.route("/instrument_reference/<id>", methods=['DELETE'])
def delete_instrument_reference(id):
    return relationships.delete_instrument_reference(id)
@app.route("/factor_reference", methods=['POST'])
def post_factor_reference():
    return relationships.post_factor_reference()
@app.route("/factor_references", methods=['GET'])
def get_factor_references():
    return relationships.get_factor_references()
@app.route("/factor_reference/<id>", methods=['GET'])
def get_factor_reference(id):
    return relationships.get_factor_reference(id)
@app.route("/factor_reference/<id>", methods=['DELETE'])
def delete_factor_reference(id):
    return relationships.delete_factor_reference(id)
@app.route("/treatment_reference", methods=['POST'])
def post_treatment_reference():
    return relationships.post_treatment_reference()
@app.route("/treatment_references", methods=['GET'])
def get_treatment_references():
    return relationships.get_treatment_references()
@app.route("/treatment_reference/<id>", methods=['GET'])
def get_treatment_reference(id):
    return relationships.get_treatment_reference(id)
@app.route("/treatment_reference/<id>", methods=['DELETE'])
def delete_treatment_reference(id):
    return relationships.delete_treatment_reference(id)
@app.route("/vi_reference", methods=['POST'])
def post_vi_reference():
    return relationships.post_vi_reference()
@app.route("/vi_references", methods=['GET'])
def get_vi_references():
    return relationships.get_vi_references()
@app.route("/vi_reference/<id>", methods=['GET'])
def get_vi_reference(id):
    return relationships.get_vi_reference(id)
@app.route("/vi_reference/<id>", methods=['DELETE'])
def delete_vi_reference(id):
    return relationships.delete_vi_reference(id)
@app.route("/vd_reference", methods=['POST'])
def post_vd_reference():
    return relationships.post_vd_reference()
@app.route("/vd_references", methods=['GET'])
def get_vd_references():
    return relationships.get_vd_references()
@app.route("/vd_reference/<id>", methods=['GET'])
def get_vd_reference(id):
    return relationships.get_vd_reference(id)
@app.route("/vd_reference/<id>", methods=['DELETE'])
def delete_vd_reference(id):
    return relationships.delete_vd_reference(id)

# Relationships CRUD
@app.route("/vi_vd_relationship", methods=['POST'])
def post_vi_vd_relationship():
    return relationships.post_vi_vd_relationship()
@app.route("/vi_vd_relationships", methods=['GET'])
def get_vi_vd_relationships():
    return relationships.get_vi_vd_relationships()
@app.route("/vi_vd_relationship/<id>", methods=['GET'])
def get_vi_vd_relationship(id):
    return relationships.get_vi_vd_relationship(id)
@app.route("/vi_vd_relationship/<id>", methods=['DELETE'])
def delete_vi_vd_relationship(id):
    return relationships.delete_vi_vd_relationship(id)
@app.route("/metric_instrument_relationship", methods=['POST'])
def post_metric_instrument_relationship():
    return relationships.post_metric_instrument_relationship()
@app.route("/metric_instrument_relationships", methods=['GET'])
def get_metric_instrument_relationships():
    return relationships.get_metric_instrument_relationships()
@app.route("/metric_instrument_relationship/<id>", methods=['GET'])
def get_metric_instrument_relationship(id):
    return relationships.get_metric_instrument_relationship(id)
@app.route("/metric_instrument_relationship/<id>", methods=['DELETE'])
def delete_metric_instrument_relationship(id):
    return relationships.delete_metric_instrument_relationship(id)
@app.route("/factors_treatments_relationship", methods=['POST'])
def post_factors_treatments_relationship():
    return relationships.post_factors_treatments_relationship()
@app.route("/factors_treatments_relationships", methods=['GET'])
def get_factors_treatments_relationships():
    return relationships.get_factors_treatments_relationships()
@app.route("/factors_treatments_relationship/<id>", methods=['GET'])
def get_factors_treatments_relationship(id):
    return relationships.get_factors_treatments_relationship(id)

@app.route("/factors_treatments_relationship/<id>", methods=['DELETE'])
def delete_factors_treatments_relationship(id):
    return relationships.delete_factors_treatments_relationship(id)