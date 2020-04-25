# Generated by Django 3.0.4 on 2020-04-24 10:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_delete_user'),
        ('authorization', '0007_auto_20200424_0115'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='liked',
            field=models.ManyToManyField(blank=True, related_name='liked_products', to='api.Product'),
        ),
        migrations.AlterField(
            model_name='user',
            name='myOrders',
            field=models.ManyToManyField(blank=True, related_name='bought_products', to='api.Product'),
        ),
    ]
