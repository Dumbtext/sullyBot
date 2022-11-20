from django.db import models

# Create your models here.
class points(models.Model):

    pointName = models.CharField(max_length=50, unique =True)
    fieldPoints = models.JSONField(encoder=None,decoder=None)

    def __unicode__(self):
        return self.pointName
    