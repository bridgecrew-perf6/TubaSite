#mv expertAI.py ExperAi/lib/python3/site-packages/
import os
os.environ["EAI_USERNAME"] = 'tototototoman@gmail.com'
os.environ["EAI_PASSWORD"] = 'pUfver-rodkoj-zigso7'
from expertai.nlapi.cloud.client import ExpertAiClient

def lambda_handler(event, context):
    client = ExpertAiClient()
    text = event["review"]
    language= 'en'
    document = client.specific_resource_analysis(
        body={"document": {"text": text}}, 
        params={'language': language, 'resource': 'sentiment'})

    return {
        'statusCode': 200,
        'body': json.dumps(document.sentiment.overall)
    }
