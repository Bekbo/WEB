from django.test import TestCase
from .views import getEthToDoll


class EthereumTest(TestCase):
    # test that the page is reachable
    def test_home_page(self):
        response = self.client.get('/')
        self.assertEquals(response.status_code, 200)

    # test that exchange rate is getting right
    def test_eth_cost(self):
        eth_exchange = getEthToDoll()
        self.assertGreater(eth_exchange, 0)

    # test that multiplication is right
    def test_eth_exchange(self):
        eth_exchange = getEthToDoll()
        eth_sample = 2
        self.assertGreater(eth_exchange * eth_sample, 0)
