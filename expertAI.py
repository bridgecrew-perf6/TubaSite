import os
import json
os.environ["EAI_USERNAME"] = Your_Experai_Username
os.environ["EAI_PASSWORD"] = Your_Experai_Password
from expertai.nlapi.cloud.client import ExpertAiClient

def lambda_handler(event, context):
    client = ExpertAiClient()   
    text = event['queryStringParameters']['review']
    language= 'en'
    document = client.specific_resource_analysis(
    body={"document": {"text": text}}, 
    params={'language': language, 'resource': 'sentiment'})
    document1 = client.specific_resource_analysis(
    body={"document": {"text": text}}, 
    params={'language': language, 'resource': 'relevants'})
    x=[]
    a= []
    for mainlemma in document1.main_lemmas:
        x.append(mainlemma.value)
    a.append(document.sentiment.overall)
    a.append(x)

    return {
        'statusCode': 200,
        'headers': {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*" ,
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        'body':  json.dumps(a)
    }
